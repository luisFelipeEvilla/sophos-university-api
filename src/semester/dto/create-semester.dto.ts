import { IsNotEmpty, IsNumber, IsPositive, Max, MaxLength, Min, MinLength } from "class-validator";

export class CreateSemesterDto {
    @IsNumber()
    @IsPositive()
    @Max(2100)
    @Min(1950)
    year: number;

    @IsNumber()
    @IsPositive()
    @Min(1)
    @Max(2)
    period: number;
}
