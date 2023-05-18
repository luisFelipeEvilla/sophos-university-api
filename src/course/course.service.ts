import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';
import { TeachCourse } from './entities/teach-course.entity';
import { NotFoundError } from 'rxjs';
import { TeacherService } from 'src/teacher/teacher.service';

@Injectable()
export class CourseService {
  constructor(@InjectRepository(Course) private readonly courseModel: Repository<Course>,
  @InjectRepository(TeachCourse) private readonly teachCourseModel: Repository<TeachCourse>,
  private readonly teacherService: TeacherService
  ) { }
  
  async create(createCourseDto: CreateCourseDto) {
    const course = this.courseModel.create(createCourseDto);
    
    return await this.courseModel.save(course);
  }

  async findAll() {
    return await this.courseModel.find();
  }

  async findOne(id: number) {
    return await this.courseModel.findOne({where:  {id}});
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const course = await this.courseModel.findOne({where:  {id}});
    this.courseModel.merge(course, updateCourseDto);
    
    return await this.courseModel.save(course);
  }

  async remove(id: number) {
    const course = await this.courseModel.findOne({where:  {id}});
    
    return await this.courseModel.remove(course);
  }

  async addTeacher(courseId: number, teacherId: number) {
    try {
      const course = await this.findOne(courseId);
      const teacher = await this.teacherService.findOne(teacherId);
    } catch (error) {
      if (error instanceof NotFoundException) throw new NotFoundException(error.message);
    }

    // check if the teacher is already teaching the course
    const alreadyTeach = await this.teachCourseModel.findOne({where:  {courseId, teacherId}});
    
    if (alreadyTeach) throw new ConflictException('The teacher is already teaching the course');
    
    const teachCourse = this.teachCourseModel.create({courseId, teacherId});

    return await this.teachCourseModel.save(teachCourse);
  }

  async removeTeacher(courseId: number, teacherId: number) {
    const teachCourse = await this.teachCourseModel.findOne({where:  {courseId, teacherId}});
    
    return await this.teachCourseModel.remove(teachCourse);
  }
}
