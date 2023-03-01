import { Module } from '@nestjs/common';
import { QuizTagController } from '../controllers/quizTag.controller';
import { DatabaseModule } from '../database/database.module';
import { quizTagProviders } from '../providers/quizTag.providers';
import { QuizTagService } from '../services/quizTag.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...quizTagProviders,
    QuizTagService,
  ],
  controllers: [QuizTagController]
})
export class QuizTagModule {}
