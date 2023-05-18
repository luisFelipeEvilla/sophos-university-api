import { IsNotEmpty, IsNumber, IsString, isNumber } from "class-validator";

export class CreateCourseDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsNotEmpty()
    @IsNumber({ maxDecimalPlaces: 0, allowInfinity: false, allowNaN: false })
    readonly max_quota: number;

    @IsNotEmpty()
    @IsNumber({ maxDecimalPlaces: 0, allowInfinity: false, allowNaN: false})
    readonly credits: number;
}
