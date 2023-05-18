import { IsNumber, IsPositive } from "class-validator";

export class EnrollSemesterDto {
    @IsNumber()
    @IsPositive()
    studentId: number;

    @IsNumber()
    @IsPositive()
    semesterId: number;

    @IsNumber()
    @IsPositive()
    credits: number;
}