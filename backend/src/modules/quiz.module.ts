import { Module } from '@nestjs/common';
import { QuizController } from 'src/controllers/quiz.controller';
import { DatabaseModule } from '../database/database.module';
import { quizProviders } from '../providers/quiz.providers';
import { QuizService } from '../services/quiz.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...quizProviders,
    QuizService,
  ],
  controllers: [QuizController]
})
export class QuizModule {}
