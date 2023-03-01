import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AnswerDto } from 'src/dtos/answer.dto';
import Answer from 'src/entities/answer.entity';
import { AnswerService } from '../services/answer.service';

@Controller("/answer")
export class AnswerController {
  constructor(
    private readonly answerService: AnswerService
  ) {}

  @Get("/:id")
  findById(@Param('id') id: number): Promise<Answer> {
    return this.answerService.findById(id)
  }

  @Post()
  create(@Body() answerDto: AnswerDto): Promise<Answer> {
    return this.answerService.create(answerDto)
  }
}

