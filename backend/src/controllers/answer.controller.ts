import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AnswerDto } from '../dtos/answer.dto';
import AnswerEntity from '../entities/answer.entity';
import { AnswerService } from '../services/answer.service';

@Controller("/answer")
export class AnswerController {
  constructor(
    private readonly answerService: AnswerService
  ) {}

  @Get("/:id")
  findById(@Param('id') id: number): Promise<AnswerEntity> {
    return this.answerService.findById(id)
  }

  @Post()
  create(@Body() answerDto: AnswerDto): Promise<AnswerEntity> {
    return this.answerService.create(answerDto)
  }
}

