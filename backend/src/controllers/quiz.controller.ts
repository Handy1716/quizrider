import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import CreatorEntity from 'src/entities/creator.entity';
import { AnswerService } from 'src/services/answer.service';
import { QuestionService } from 'src/services/question.service';
import { QuizDto } from '../dtos/quiz.dto';
import QuizEntity from '../entities/quiz.entity';
import { QuizService } from '../services/quiz.service';

@Controller("/quiz")
export class QuizController {
  constructor(
    private readonly quizService: QuizService,
    private readonly questionService: QuestionService,
    private readonly answerService: AnswerService,
  ) {}

  @Get("/:id")
  findById(@Param('id') id: number): Promise<QuizEntity> {
    return this.quizService.findById(id)
  }

  @Post()
  async create(@Body() quizDto: QuizDto): Promise<QuizEntity> {
    const creator = new CreatorEntity(); // TODO belepett user
    creator.id = 1;
    const quiz = await this.quizService.create(quizDto, creator);
    await Promise.all(
      quizDto?.questions?.map(questionDto => {
        return this.questionService.create(questionDto, quiz);
      }) || []
    );
    return this.quizService.findById(quiz.id);
  }
}
