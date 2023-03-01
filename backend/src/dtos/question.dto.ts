import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class QuestionDto {
    @IsNumber()
    @IsNotEmpty()
    quiz: number;

    @IsString()
    @IsNotEmpty()
    text: string;

}