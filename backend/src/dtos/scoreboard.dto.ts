import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';


export class ScoreboardAnswerDto {
  @IsNumber()
  @IsNotEmpty()
  questionId: number;

  @IsNumber()
  @IsNotEmpty()
  answerId: number;

  @IsNumber()
  @IsNotEmpty()
  time: number;
}

export class ScoreboardDto {
  @IsString()
  @IsNotEmpty()
  runCode: string;

  @IsString()
  @IsNotEmpty()
  deviceId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ScoreboardAnswerDto)
  answers: ScoreboardAnswerDto[];
}
