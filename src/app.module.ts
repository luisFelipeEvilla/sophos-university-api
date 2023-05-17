import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FacultyModule } from './faculty/faculty.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://test:test@cluster0.3eyqur6.mongodb.net', 
    { dbName: 'sophosUniversity' }),
    FacultyModule,
    StudentModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
