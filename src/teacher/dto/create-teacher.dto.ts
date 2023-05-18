import { Type } from "class-transformer";
import { IsDateString, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { CreateDegreeDtoWithTeacher } from "./create-degree-with-teacher-dto";

export class CreateTeacherDto {
    @IsString()
    @IsNotEmpty()
    first_name: string;

    @IsString()
    @IsNotEmpty()
    last_name: string;

    @IsNotEmpty()
    @IsDateString()
    birthday: Date;

    @Type(() => CreateDegreeDtoWithTeacher)
    @ValidateNested({ each: true })
    degrees: CreateDegreeDtoWithTeacher[];
}
