import { Module } from '@nestjs/common';
import { AnswerController } from '../controllers/answer.controller';
import { DatabaseModule } from '../database/database.module';
import { answerProviders } from '../providers/answer.providers';
import { AnswerService } from '../services/answer.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...answerProviders,
    AnswerService,
  ],
  controllers: [AnswerController]
})
export class AnswerModule {}