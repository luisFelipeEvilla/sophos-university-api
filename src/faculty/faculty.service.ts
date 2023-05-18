import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Faculty } from './entities/faculty.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FacultyService {
  constructor(@InjectRepository(Faculty) private readonly facultyRepository: Repository<Faculty>) { }

  async create(createFacultyDto: CreateFacultyDto) {
    const faculty = this.facultyRepository.create(createFacultyDto);
    return await this.facultyRepository.save(faculty);
  }

  async findAll() {
    return await this.facultyRepository.find();
  }

  async findOne(id: number) {
    const faculty = await this.facultyRepository.findOne({ where: { id } });

    if (!faculty) throw new NotFoundException(`Faculty #${id} not found`);

    return faculty;
  }

  async update(id: number, updateFacultyDto: UpdateFacultyDto) {
    const faculty = await this.facultyRepository.findOne({ where: { id } });

    if (!faculty) throw new NotFoundException(`Faculty #${id} not found`);

    Object.assign(faculty, updateFacultyDto);

    return await this.facultyRepository.save(faculty);
  }

  async remove(id: number) {
    const faculty = await this.facultyRepository.findOne({ where: { id } });

    if (!faculty) throw new NotFoundException(`Faculty #${id} not found`);

    return await this.facultyRepository.remove(faculty);
  }
}
