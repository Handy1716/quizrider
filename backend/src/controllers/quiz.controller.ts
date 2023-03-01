import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QuizDto } from '../dtos/quiz.dto';
import Quiz from '../entities/quiz.entity';
import { QuizService } from '../services/quiz.service';

@Controller("/quiz")
export class QuizController {
  constructor(
    private readonly quizService: QuizService
  ) {}

  @Get("/:id")
  findById(@Param('id') id: number): Promise<Quiz> {
    return this.quizService.findById(id)
  }

  @Post()
  create(@Body() quizDto: QuizDto): Promise<Quiz> {
    return this.quizService.create(quizDto)
  }
}