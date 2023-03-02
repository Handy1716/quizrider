import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { QuizDto } from './quiz.dto';

export class CreatorDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  quizzes: QuizDto[];
}
