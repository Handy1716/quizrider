import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Delete, Request, UseGuards } from '@nestjs/common/decorators';
import { HttpStatus } from '@nestjs/common/enums';
import CreatorEntity from 'src/entities/creator.entity';
import { JwtAuthGuard } from 'src/providers/auth.providers';
import { AnswerService } from 'src/services/answer.service';
import { QuestionService } from 'src/services/question.service';
import { QuizDto } from '../dtos/quiz.dto';
import QuizEntity from '../entities/quiz.entity';
import { QuizService } from '../services/quiz.service';
import { Response } from 'express';

@Controller("/quiz")
export class QuizController {
  constructor(
    private readonly quizService: QuizService,
    private readonly questionService: QuestionService,
    private readonly answerService: AnswerService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get("/me")
  findMe(@Request() req: any): Promise<QuizEntity[]> {
    return this.quizService.findMe(req.user.id);
  }

  @Get("/public")
  findPublic(): Promise<QuizEntity[]> {
    return this.quizService.findPublic();
  }

  @UseGuards(JwtAuthGuard)
  @Get("/:id")
  findById(@Param('id') id: number): Promise<QuizEntity> {
    return this.quizService.findById(id)
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() quizDto: QuizDto, @Request() req: any): Promise<QuizEntity> {
    const creator = new CreatorEntity();
    creator.id = req.user.id;
    const quiz = await this.quizService.create(quizDto, creator);
    return this.quizService.findById(quiz.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete("/:id")
  async delete(@Param('id') id: number, @Res() res: Response) {
    this.quizService.delete(id);
    return res.status(HttpStatus.OK).json();
  }

}
