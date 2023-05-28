import { IsNumber, IsPositive } from "class-validator";

export class EnrollSemesterDto {
    @IsNumber()
    @IsPositive()
    credits: number;
}