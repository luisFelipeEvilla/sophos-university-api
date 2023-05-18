import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateFacultyDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string;
}
