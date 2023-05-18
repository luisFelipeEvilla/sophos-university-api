import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { TeachCourse } from './entities/teach-course.entity';
import { TeacherService } from 'src/teacher/teacher.service';
import { DegreeService } from 'src/teacher/degree.service';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { Degree } from 'src/teacher/entities/degree.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, TeachCourse, Teacher, Degree]),
  ],
  controllers: [CourseController],
  providers: [CourseService, TeacherService]
})
export class CourseModule {}
