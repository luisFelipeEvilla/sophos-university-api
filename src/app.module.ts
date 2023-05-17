import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FacultyModule } from './faculty/faculty.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://test:test@cluster0.3eyqur6.mongodb.net', 
    { dbName: 'sophosUniversity' }),
    FacultyModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
