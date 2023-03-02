import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
  create(@Body() quizDto: QuizDto): Promise<QuizEntity> {
    // ujat  menteni quizbol
      // letreho az osszes question
        // leteho az osszes answert
    const quizPromise = this.quizService.create(quizDto)
    // const question = this.questionService.create(..., quiz);
    // const answer = this.answerService.create(..., question);
    return quizPromise;
  }
}
