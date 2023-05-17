import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { teacherSchema } from './schemas/teacher.schema';
import { degreeSchema } from './schemas/degree.schema';

@Module({
  imports: [MongooseModule.forFeature(
    [
      { name: 'Teacher', schema: teacherSchema }, 
      { name: 'Degree', schema: degreeSchema}
    ]
    )
  ],
  controllers: [TeacherController],
  providers: [TeacherService]
})
export class TeacherModule { }
