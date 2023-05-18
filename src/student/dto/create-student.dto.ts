import { IsString, IsNotEmpty, IsDateString, IsInt, IsPositive } from "class-validator";

export class CreateStudentDto {
    @IsString()
    @IsNotEmpty()
    first_name: string;

    @IsString()
    @IsNotEmpty()
    last_name: string;

    @IsNotEmpty()
    @IsDateString()
    birthday: Date;

    @IsInt()
    @IsPositive()
    facultyId: number;
}
