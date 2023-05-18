import { IsNotEmpty, IsNumber, IsPositive, Max, MaxLength, Min, MinLength } from "class-validator";

export class CreateSemesterDto {
    @IsNumber()
    @IsPositive()
    @MinLength(4)
    @MaxLength(4)
    year: number;

    @IsNumber()
    @IsPositive()
    @Min(1)
    @Max(2)
    semester: number;
}
