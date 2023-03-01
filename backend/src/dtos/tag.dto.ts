import { IsString } from 'class-validator';

export class TagDto {
  @IsString()
  text: string;

}