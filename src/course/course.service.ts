import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
  constructor (@InjectModel(Course.name) private courseModel: Model<Course>) {}

  async create(createCourseDto: CreateCourseDto) {
    const course = new this.courseModel(createCourseDto);
    await course.save();
    return course;
  }

  async findAll() {
    return await this.courseModel.find().exec();
  }

  async findOne(id: string) {
    const course = this.courseModel.findById(id).exec();

    if(!course) throw new Error('Course not found');

    return course;
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    const updatedCourse = this.courseModel.findByIdAndUpdate(id, updateCourseDto, { new: true }).exec();

    if (!updatedCourse) throw new Error('Course not found');

    return updatedCourse;
  }

  async remove(id: string) {
    const deletedCourse = this.courseModel.findByIdAndDelete(id).exec();

    if (!deletedCourse) throw new Error('Course not found');

    return deletedCourse;
  }
}
