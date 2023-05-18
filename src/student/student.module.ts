import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Faculty } from 'src/faculty/entities/faculty.entity';
import { EnrollSemester } from './entities/enroll-semester.entity';
import { SemesterService } from 'src/semester/semester.service';
import { Semester } from 'src/semester/entities/semester.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student, Faculty, EnrollSemester, Semester])],
  controllers: [StudentController],
  providers: [StudentService, SemesterService]
})
export class StudentModule {}
