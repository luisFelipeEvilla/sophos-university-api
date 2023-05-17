import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teacherService.create(createTeacherDto);
  }

  @Get()
  findAll() {
    return this.teacherService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const teacher = await this.teacherService.findOne(id);

    if (!teacher) throw new NotFoundException('Teacher does not exist!');

    return teacher;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTeacherDto: UpdateTeacherDto) {
    const teacher = this.teacherService.update(id, updateTeacherDto);
  
    if (!teacher) throw new NotFoundException('Teacher does not exist!');

    return teacher;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const teacher = await this.teacherService.remove(id);
    
    if (!teacher) throw new NotFoundException('Teacher does not exist!');

    return teacher;
  }
}
