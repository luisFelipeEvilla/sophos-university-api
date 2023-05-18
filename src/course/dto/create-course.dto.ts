import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateCourseDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    max_quota: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    credits: number;
}
