import { Type } from 'class-transformer';
import { IsBoolean, IsDefined, IsNotEmpty, IsNotEmptyObject, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
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

  @ValidateNested()
  @Type(() => QuestionDto)
  questions: QuestionDto[];

  runcodes: RuncodeDto[];

  tags: TagDto[];
}
