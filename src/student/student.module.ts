import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Faculty } from 'src/faculty/entities/faculty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student]),
  TypeOrmModule.forFeature([Faculty]) ],
  controllers: [StudentController],
  providers: [StudentService]
})
export class StudentModule {}
