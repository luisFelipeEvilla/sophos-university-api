import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
import { Faculty } from 'src/faculty/entities/faculty.entity';

@Injectable()
export class StudentService {
  constructor(@InjectRepository(Student) private readonly studentRepository: Repository<Student>,
    @InjectRepository(Faculty) private readonly facultyRepository: Repository<Faculty>) { }

  async create(createStudentDto: CreateStudentDto) {
    const student = this.studentRepository.create(createStudentDto);

    const faculty = await this.facultyRepository.findOne({ where: { id: createStudentDto.facultyId } });

    if (!faculty) throw new NotFoundException(`Faculty with id ${createStudentDto.facultyId} not found`);

    student.faculty = faculty;
  
    return await this.studentRepository.save(student);
  }

  async findAll() {
    return await this.studentRepository.find();
  }

  async findOne(id: number) {
    const student = await this.studentRepository.findOne({ where: { id }, relations: ['faculty'] });


    if (!student) throw new NotFoundException(`Student with id ${id} not found`);

    return student;
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const student = await this.studentRepository.findOne({ where: { id } });

    if (!student) throw new NotFoundException(`Student with id ${id} not found`);

    Object.assign(student, updateStudentDto);

    return await this.studentRepository.save(student);
  }

  async remove(id: number) {
    const student = await this.studentRepository.findOne({ where: { id } });

    if (!student) throw new NotFoundException(`Student with id ${id} not found`);

    return await this.studentRepository.remove(student);
  }
}
