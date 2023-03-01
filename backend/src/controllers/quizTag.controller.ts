import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QuizTagDto } from '../dtos/quizTag.dto';
import QuizTag from '../entities/quizTag.entity';
import { QuizTagService } from '../services/quizTag.service';

@Controller("/quizTag")
export class QuizTagController {
  constructor(
    private readonly quizTagService: QuizTagService
  ) {}

  @Get("/:id")
  findById(@Param('id') id: number): Promise<QuizTag> {
    return this.quizTagService.findById(id)
  }

  @Post()
  create(@Body() quizTagDto: QuizTagDto): Promise<QuizTag> {
    return this.quizTagService.create(quizTagDto)
  }
}
