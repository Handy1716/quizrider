import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

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

  @IsDate()
  finishTime: Date;

  @IsBoolean()
  @IsNotEmpty()
  oneRound: boolean;

  @IsNumber()
  points: number;

}
