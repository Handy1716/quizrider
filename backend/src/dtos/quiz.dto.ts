import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreatorDto } from './creator.dto';
import { QuestionDto } from './question.dto';
import { RuncodeDto } from './runcode.dto';
import { TagDto } from './tag.dto';

export class QuizDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  @IsNotEmpty()
  public: boolean;

  @IsBoolean()
  @IsNotEmpty()
  oneRound: boolean;

  creator: CreatorDto;

  questions: QuestionDto[];

  runcodes: RuncodeDto[];

  tags: TagDto[];
}
