import { Faculty } from "src/faculty/entities/faculty.entity";
import { Degree } from "../entities/degree.entity";
import { IsDateString, IsMongoId, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CreateDegreeDto } from "./create-degree-dto";

export class CreateTeacherDto {
    @IsString()
    @IsNotEmpty()
    readonly firstname: string;
 
    @IsString()
    @IsNotEmpty()
    readonly lastname: string;
    
    @IsNotEmpty()
    @IsDateString()
    readonly birthday: Date;
    
    @IsString()
    @IsNotEmpty()
    @IsMongoId()
    readonly faculty: string;

    @ValidateNested()
    @Type(() => CreateDegreeDto)
    readonly degree!: CreateDegreeDto;
}
