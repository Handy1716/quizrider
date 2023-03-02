import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { QuestionDto } from './question.dto';

export class AnswerDto {
  @IsNumber()
  @IsNotEmpty()
  questionId: number;

  @IsString()
  @IsNotEmpty()
  text: string;

  @IsBoolean()
  @IsNotEmpty()
  rightAnwer: boolean;

  question: QuestionDto;
}
