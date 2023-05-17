import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { FacultyService } from './faculty.service';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';

@Controller('faculty')
export class FacultyController {
  constructor(private readonly facultyService: FacultyService) {}

  @Post()
  async create(@Body() createFacultyDto: CreateFacultyDto) {
    return await this.facultyService.create(createFacultyDto);
  }

  @Get()
  async findAll() {
    return await this.facultyService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const faculty = await this.facultyService.findOne(id);

    if (!faculty) throw new NotFoundException('Faculty does not exist!');
    return faculty;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFacultyDto: UpdateFacultyDto) {
    const updatedProduct = await this.facultyService.update(id, updateFacultyDto);
    if (!updatedProduct) throw new NotFoundException('Faculty does not exist!');
    return updatedProduct;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const removedProduct = await this.facultyService.remove(id);
    if (!removedProduct) throw new NotFoundException('Faculty does not exist!');
    return removedProduct;
  }
}
