import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";
import { AnswerDto } from "./answer.dto";
import { QuizDto } from "./quiz.dto";


export class QuestionDto {
    @IsString()
    @IsNotEmpty()
    text: string;

    quiz: QuizDto;

    @ValidateNested()
    @Type(() => AnswerDto)
    answers: AnswerDto[];
}
