import { Type } from 'class-transformer';
import { ArrayNotEmpty, arrayNotEmpty, IsArray, IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';
import { RuncodeDto } from './runcode.dto';

export class ScoreboardAnswerDto {
  @IsNumber()
  @IsNotEmpty()
  questionId: number;

  @IsNumber()
  @IsNotEmpty()
  answerId: number;
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
