import { IsBoolean, isDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ScoreboardDto {
  @IsNumber()
  @IsNotEmpty()
  deviceId: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  runCodeId: number;

  @isDate()
  finishTime: Date;

  @IsBoolean()
  @IsNotEmpty()
  oneRound: boolean;

  @IsNumber()
  points: number;

}
