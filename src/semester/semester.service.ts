import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSemesterDto } from './dto/create-semester.dto';
import { UpdateSemesterDto } from './dto/update-semester.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Semester } from './entities/semester.entity';

@Injectable()
export class SemesterService {
  constructor(@InjectRepository(Semester) private readonly semesterRepository: Repository<Semester>) { }

  async create(createSemesterDto: CreateSemesterDto) {
    const semester = this.semesterRepository.create(createSemesterDto);
    return await this.semesterRepository.save(semester);
  }

  async findAll() {
    const semesters = await this.semesterRepository.find();
    return semesters; 
  }

  async findOne(id: number) {
    const semester = await this.semesterRepository.findOne({ where: { id } });

    if (!semester) throw new NotFoundException(`Semester with id ${id} not found`);
    
    return semester;
  }

  async update(id: number, updateSemesterDto: UpdateSemesterDto) {
    const semester = await this.semesterRepository.findOne({ where: { id } });
    Object.assign(semester, updateSemesterDto);
    return await this.semesterRepository.save(semester);
  }

  async remove(id: number) {
    const semester = await this.semesterRepository.findOne({ where: { id } });
    return await this.semesterRepository.remove(semester);
  }
}
