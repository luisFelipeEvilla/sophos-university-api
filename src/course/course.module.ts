import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { TeachCourse } from './entities/teach-course.entity';
import { TeacherService } from 'src/teacher/teacher.service';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { Degree } from 'src/teacher/entities/degree.entity';
import { Student } from 'src/student/entities/student.entity';
import { StudentService } from 'src/student/student.service';
import { Faculty } from 'src/faculty/entities/faculty.entity';
import { SemesterService } from 'src/semester/semester.service';
import { EnrollSemester } from 'src/student/entities/enroll-semester.entity';
import { Semester } from 'src/semester/entities/semester.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, TeachCourse, Teacher,
   Degree, Faculty, Student, EnrollSemester, Semester]),
  ],
  controllers: [CourseController],
  providers: [CourseService, TeacherService, StudentService, SemesterService]
})
export class CourseModule { }
