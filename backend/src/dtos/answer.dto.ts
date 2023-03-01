import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

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
}

