import { Injectable } from '@nestjs/common';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Faculty } from './entities/faculty.entity';
import { Model } from 'mongoose';

@Injectable()
export class FacultyService {
  constructor(@InjectModel('Faculty') private readonly facultyModel: Model<Faculty>) { }

  async create(createFacultyDto: CreateFacultyDto): Promise<Faculty> {
    const createdFaculty = await new this.facultyModel(createFacultyDto);
    return createdFaculty.save();
  }

  async findAll(): Promise<Faculty[]> {
    const products = await this.facultyModel.find().exec();
    return products;
  }

  async findOne(id: string): Promise<Faculty> {
    const product = await this.facultyModel.findById(id).exec();
    return product;
  }

  async update(id: string, updateFacultyDto: UpdateFacultyDto) {
    const updatedProduct = await this.facultyModel.findByIdAndUpdate(id, updateFacultyDto, {new: true}).exec();
    return updatedProduct;
  }

  async remove(id: string) : Promise<Faculty> {
    const removedProduct = await this.facultyModel.findByIdAndDelete(id).exec();
    return removedProduct;
  }
}
