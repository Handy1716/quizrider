import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { QuestionDto } from './question.dto';

export class AnswerDto {
  @IsString()
  @IsOptional()
  text: string;

  @IsBoolean()
  @IsOptional()
  rightAnswer: boolean;

  // TODO: csak 1 jo valasz lehet es az nem lehet ures
  
  question: QuestionDto;
}
