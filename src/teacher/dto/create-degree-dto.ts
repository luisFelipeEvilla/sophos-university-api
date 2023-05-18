import { PartialType } from '@nestjs/mapped-types';
import { CreateDegreeDtoWithTeacher } from './create-degree-with-teacher-dto';
import { IsInt, IsPositive } from 'class-validator';

export class createDegreeDto extends PartialType(CreateDegreeDtoWithTeacher) {
    @IsInt()
    @IsPositive()
    teacherId: number;
}
