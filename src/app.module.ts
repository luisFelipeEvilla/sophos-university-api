import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FacultySchema } from './schema/faculty.schema';
import { FacultyService } from './faculty/faculty.service';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://test:test@cluster0.3eyqur6.mongodb.net/sophosUniversity',{dbName: 'studentdb'}),
    MongooseModule.forFeature([{ name: 'faculty', schema: FacultySchema}])
  ],
  controllers: [AppController],
  providers: [AppService, FacultyService],
})
export class AppModule {}
