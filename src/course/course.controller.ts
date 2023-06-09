import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}
  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }

  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.courseService.update(+id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseService.remove(+id);
  }

  @Post(':id/teacher/:teacherId') 
  addTeacher(@Param('id') id: string, @Param('teacherId') teacherId: string){
    return this.courseService.addTeacher(+id, +teacherId);
  }

  @Delete(':id/teacher/:teacherId')
  removeTeacher(@Param('id') id: string, @Param('teacherId') teacherId: string){
    return this.courseService.removeTeacher(+id, +teacherId);
  }

  @Post(':id/student/:studentId')
  addStudent(@Param('id') id: string, @Param('studentId') studentId: string){
    return this.courseService.addStudent(+id, +studentId);
  }

  @Delete(':id/student/:studentId')
  removeStudent(@Param('id') id: string, @Param('studentId') studentId: string){
    return this.courseService.removeStudent(+id, +studentId);
  }
}
