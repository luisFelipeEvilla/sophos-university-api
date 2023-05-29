import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { CreateDegreeDtoWithTeacher } from './dto/create-degree-with-teacher-dto';
import { DegreeService } from './degree.service';
import { createDegreeDto } from './dto/create-degree-dto';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService, private readonly degreeService: DegreeService) {}

  @Post()
  create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teacherService.create(createTeacherDto);
  }

  @Get()
  findAll() {
    return this.teacherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacherDto: UpdateTeacherDto) {
    return this.teacherService.update(+id, updateTeacherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherService.remove(+id);
  }

  @Post(':id/degrees')
  createDegree(@Param('id') id: string, @Body() degree: CreateDegreeDtoWithTeacher) {
    return this.teacherService.createDegree(+id, degree);
  }

  @Delete(':id/degrees/:degreeId')
  removeDegree(@Param('id') id: string, @Param('degreeId') degreeId: string) {
    return this.teacherService.removeDegree(+id, +degreeId);
  }
}
