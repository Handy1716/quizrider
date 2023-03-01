import { IsNotEmpty, IsNumber } from 'class-validator';

export class RuncodeDto {
  @IsNumber()
  @IsNotEmpty()
  quizId: number;

  @IsNumber()
  runcode: number;

}