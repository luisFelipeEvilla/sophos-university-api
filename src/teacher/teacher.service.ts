import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity';
import { Repository } from 'typeorm';
import { Degree } from './entities/degree.entity';
import { CreateDegreeDtoWithTeacher } from './dto/create-degree-with-teacher-dto';
import { NotFoundError } from 'rxjs';

@Injectable()
export class TeacherService {
  constructor(@InjectRepository(Teacher) private readonly teacherRepository: Repository<Teacher>,
  @InjectRepository(Degree) private readonly degreeRepository: Repository<Degree>
  ) {}

  async create(createTeacherDto: CreateTeacherDto) {
    const teacher = this.teacherRepository.create(createTeacherDto);
    
    return await this.teacherRepository.save(teacher);
  }

  async findAll() {
    return await this.teacherRepository.find();
  }

  async findOne(id: number) {
    const teacher = await this.teacherRepository.findOne({
      where: { id },
      relations: ['degrees']
    });

    if (!teacher) {
      throw new NotFoundException(`Teacher #${id} not found`);
    }

    return teacher;
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    const teacher = await this.teacherRepository.preload({
      id,
      ...updateTeacherDto
    });
    
    if (!teacher) {
      throw new NotFoundException(`Teacher #${id} not found`);
    }

    return await this.teacherRepository.save(teacher);
  }

  async remove(id: number) {
    const teacher = await this.teacherRepository.findOne({ where: { id } });

    return await this.teacherRepository.remove(teacher);
  }

  async createDegree(id: number, degree: CreateDegreeDtoWithTeacher) {
    const teacher = await this.teacherRepository.findOne({ where: { id }, relations: ['degrees'] });

    if (!teacher) { throw new NotFoundException(`Teacher #${id} not found`);} 

    const newDegree = new Degree();

    Object.assign(newDegree, degree);
    newDegree.teacher = teacher;

    console.log(newDegree);

    return await this.degreeRepository.save(newDegree);
  }

  async removeDegree(id: number, degreeId: number) {
    const teacher = await this.findOne(id);

    return await this.teacherRepository.save({
      ...teacher,
      degrees: teacher.degrees.filter(degree => degree.id !== degreeId)
    });
  }
}
