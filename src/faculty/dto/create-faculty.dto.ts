import { IsString, IsNotEmpty } from 'class-validator';

export class CreateFacultyDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;
}
