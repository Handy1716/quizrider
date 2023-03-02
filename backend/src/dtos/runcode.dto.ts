import { isNotEmpty, IsNotEmpty, IsNumber } from 'class-validator';
import { QuizDto } from './quiz.dto';
import { ScoreboardDto } from './scoreboard.dto';

export class RuncodeDto {
  @IsNumber()
  @IsNotEmpty()
  runcode: number;

  quiz: QuizDto;

  scoreboards: ScoreboardDto[];
}