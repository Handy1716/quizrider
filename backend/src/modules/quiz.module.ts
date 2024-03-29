import { Module } from '@nestjs/common';
import { answerProviders } from 'src/providers/answer.providers';
import { questionProviders } from 'src/providers/question.providers';
import { tagProviders } from 'src/providers/tag.providers';
import { AnswerService } from 'src/services/answer.service';
import { QuestionService } from 'src/services/question.service';
import { TagService } from 'src/services/tag.service';
import { QuizController } from '../controllers/quiz.controller';
import { DatabaseModule } from '../database/database.module';
import { quizProviders } from '../providers/quiz.providers';
import { QuizService } from '../services/quiz.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...quizProviders,
    ...questionProviders,
    ...answerProviders,
    ...tagProviders,
    QuizService,
    QuestionService,
    AnswerService,
    TagService,
  ],
  controllers: [QuizController]
})
export class QuizModule {}
