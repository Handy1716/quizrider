import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { AnswerModule } from './answer.module';
import { CreatorModule } from './creator.module';
import { QuestionModule } from './question.module';
import { QuizModule } from './quiz.module';
import { RuncodeModule } from './runcode.module';
import { ScoreboardModule } from './scoreboard.module';
import { TagModule } from './tag.module';

@Module({
  // imports: [CreatorModule, QuizModule, QuestionModule, AnswerModule, TagModule, QuizTagModule, ScoreboardModule, RuncodeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
