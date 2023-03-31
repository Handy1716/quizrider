import { Type } from "class-transformer";
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";
import { AnswerDto } from "./answer.dto";
import { QuizDto } from "./quiz.dto";


export class QuestionDto {
    @IsString()
    @IsNotEmpty()
    text: string;

    quiz: QuizDto;

    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => AnswerDto)
    answers: AnswerDto[];
}
