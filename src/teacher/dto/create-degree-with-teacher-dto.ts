import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateDegreeDtoWithTeacher {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsDateString()
    earned_at: Date;
}