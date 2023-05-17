import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher } from './entities/teacher.entity';
import { Model } from 'mongoose';
import { Degree } from './entities/degree.entity';

@Injectable()
export class TeacherService {
  constructor(@InjectModel('Teacher') private readonly teacherModel: Model<Teacher>) { }

  create(createTeacherDto: CreateTeacherDto) {
    const createdTeacher = new this.teacherModel(createTeacherDto);
    return createdTeacher.save();
  }

  async findAll() {
    const teachers = await this.teacherModel.find().populate('faculty').exec();
    return teachers;
  }

  async findOne(id: string) {
    const teacher = await this.teacherModel.findById(id).populate('faculty').exec();
    return teacher;
  }

  async update(id: string, updateTeacherDto: UpdateTeacherDto) {
    const updatedTeacher = await this.teacherModel.findByIdAndUpdate(id, updateTeacherDto, { new: true });
    return updatedTeacher; 
  }

  async remove(id: string) {
    const deletedTeacher = await this.teacherModel.findByIdAndDelete(id);
    return deletedTeacher;
  }
}
