import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity';
import { Degree } from './entities/degree.entity';
import { DegreeService } from './degree.service';

@Module({
  imports: [TypeOrmModule.forFeature([Teacher]),
    TypeOrmModule.forFeature([Degree])  
  ],
  controllers: [TeacherController],
  providers: [TeacherService, DegreeService]
})
export class TeacherModule {}
