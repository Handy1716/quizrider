import { IsNotEmpty, IsString } from 'class-validator';
import { QuizDto } from './quiz.dto';

export class TagDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  quizzes: QuizDto[];
}