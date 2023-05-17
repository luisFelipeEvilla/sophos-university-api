import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateDegreeDto {
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsDateString()
    readonly earnedAt: Date;
}