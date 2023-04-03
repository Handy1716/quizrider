import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { CreatorDto } from './creator.dto';
import { QuestionDto } from './question.dto';
import { RuncodeDto } from './runcode.dto';
import { TagDto } from './tag.dto';

export class QuizDto {
  @IsNumber()
  @IsOptional()
  id: number;

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

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => QuestionDto)
  questions: QuestionDto[];

  runcodes: RuncodeDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TagDto)
  tags: TagDto[];
}
