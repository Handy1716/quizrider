import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { QuestionDto } from './question.dto';

export class AnswerDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsBoolean()
  @IsNotEmpty()
  rightAnswer: boolean;

  question: QuestionDto;
}
