import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacultyModule } from './faculty/faculty.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { CourseModule } from './course/course.module';
import { SemesterModule } from './semester/semester.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT) : 5432,
      username: process.env.DATABASE_USER || 'postgres', // your username
      password: process.env.DATABASE_PASSWORD || 'test', // your password
      database: process.env.DATABASE_NAME || 'sophos',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    FacultyModule,
    StudentModule,
    TeacherModule,
    CourseModule,
    SemesterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
