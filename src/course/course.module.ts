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
import { Student } from 'src/student/entities/student.entity';
import { StudentService } from 'src/student/student.service';
import { TakeCourse } from './entities/take-course.entity';
import { Faculty } from 'src/faculty/entities/faculty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, TeachCourse, Teacher,
   Degree, TakeCourse, Faculty, Student]),
  ],
  controllers: [CourseController],
  providers: [CourseService, TeacherService, StudentService]
})
export class CourseModule { }
