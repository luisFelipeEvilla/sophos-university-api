import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Degree } from './entities/degree.entity';
import { TeacherService } from './teacher.service';
import { createDegreeDto } from './dto/create-degree-dto';

@Injectable()
export class DegreeService {
  constructor(@InjectRepository(Degree) private readonly degreeRepository: Repository<Degree>,
  private teacherService: TeacherService,
  ) {}

  async create (degree: createDegreeDto) { 
    const teacher = await this.teacherService.findOne(degree.teacherId);

    if (!teacher) { throw new Error(`Teacher #${degree.teacherId} not found`);} 
    
    

  }

  async remove(id: number, degreeId: number) {
    const teacher = await this.teacherService.findOne(id);

    return await this.teacherService.update(id, {
      ...teacher,
      degrees: teacher.degrees.filter(degree => degree.id !== degreeId)
    });
  }
}
