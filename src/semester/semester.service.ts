import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSemesterDto } from './dto/create-semester.dto';
import { UpdateSemesterDto } from './dto/update-semester.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Semester } from './entities/semester.entity';

@Injectable()
export class SemesterService {
  constructor(@InjectRepository(Semester) private readonly semesterRepository: Repository<Semester>) { }

  async create(createSemesterDto: CreateSemesterDto) {
    const {year, period} = createSemesterDto
    // check if the semester already exists
    const semester = await this.semesterRepository.findOne({
      where: { year, period}
    });    

    if (semester) throw new ConflictException(`Semester ${year}-${period} already exists`)

    const newSemester = this.semesterRepository.create(createSemesterDto);

    return await this.semesterRepository.save(newSemester);
  }

  async findAll() {
    const semesters = await this.semesterRepository.find();
    return semesters; 
  }

  async findOne(id: number) {
    const semester = await this.semesterRepository.findOne({ where: { id }, relations: ['students', 'students.student'] });

    if (!semester) throw new NotFoundException(`Semester with id ${id} not found`);
    
    return semester;
  }

  async getCurrentSemester() {
      // get the last semester
      const semesters = await this.semesterRepository.find({
        order: {
          year: 'DESC',
          period: 'DESC'
        }
      });

      const semester = semesters[0];

      if (!semester) throw new NotFoundException(`Semester not found`);

      return semester;
  }

  async update(id: number, updateSemesterDto: UpdateSemesterDto) {
    const semester = await this.semesterRepository.findOne({ where: { id } });
    Object.assign(semester, updateSemesterDto);
    return await this.semesterRepository.save(semester);
  }

  async remove(id: number) {
    return await this.semesterRepository.delete({ id })
  }
}
