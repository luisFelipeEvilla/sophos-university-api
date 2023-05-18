import { IsNumber, IsPositive } from "class-validator";

export class CreateTeachCourseDto {
    @IsNumber()
    @IsPositive()
    teacherId: number;

    @IsNumber()
    @IsPositive()
    courseId: number;
}