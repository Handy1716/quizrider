import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { AnswerDto } from "./answer.dto";
import { QuizDto } from "./quiz.dto";


export class QuestionDto {
    @IsString()
    @IsNotEmpty()
    text: string;

    quiz: QuizDto;

    answers: AnswerDto[];
}