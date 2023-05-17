import { Transform, Type } from "class-transformer";
import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateStudentDto {
    @IsString()
    @IsNotEmpty()
    firstname: string;

    @IsString()
    @IsNotEmpty()
    lastname: string;

    @IsNotEmpty()
    @IsDateString()
    birthday: Date;

    @IsNotEmpty()
    faculty: string;
}
