import { IsNumber } from 'class-validator';

export class QuizTagDto {
  @IsNumber()
  quizId: number;

  @IsNumber()
  tagsId: number;
  
}