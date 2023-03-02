import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { RuncodeDto } from './runcode.dto';

export class ScoreboardDto {
  @IsString()
  @IsNotEmpty()
  deviceId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  runCodeId: number;

  @IsDate()
  finishTime: Date;

  @IsNumber()
  points: number;

  runcode: RuncodeDto;
}
