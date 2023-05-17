import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(@InjectModel('Student') private readonly studentModel: Model<Student>) {}
  
  create(createStudentDto: CreateStudentDto) {
    const createdStudent = new this.studentModel(createStudentDto);
    return createdStudent.save();
  }

  async findAll() {
    const students = await this.studentModel.find().populate('faculty').exec();
    return students;
  }

  async findOne(id: string) {
    const student = await this.studentModel.findById(id).exec();
    return student;
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    const updatedStudent = await this.studentModel.findByIdAndUpdate(id, updateStudentDto, {new: true}).exec();
    return updatedStudent;
  }

  async remove(id: string) {
    const removedStudent = await this.studentModel.findByIdAndDelete(id).exec();
  }
}
