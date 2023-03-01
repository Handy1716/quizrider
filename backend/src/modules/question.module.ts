import { Module } from '@nestjs/common';
import { QuestionController } from 'src/controllers/question.controller';
import { DatabaseModule } from '../database/database.module';
import { questionProviders } from '../providers/question.providers';
import { QuestionService } from '../services/question.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...questionProviders,
    QuestionService,
  ],
  controllers: [QuestionController]
})
export class QuestionModule {}
