import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class QuizDto {
  @IsNumber()
  @IsNotEmpty()
  creatorId: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  @IsNotEmpty()
  public: boolean;

  @IsBoolean()
  @IsNotEmpty()
  oneRound: boolean;
}
