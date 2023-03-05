import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { AnswerModule } from './answer.module';
import { CreatorModule } from './creator.module';
import { LoginModule } from './login.module';
import { QuestionModule } from './question.module';
import { QuizModule } from './quiz.module';
import { RuncodeModule } from './runcode.module';
import { ScoreboardModule } from './scoreboard.module';
import { TagModule } from './tag.module';

@Module({
  imports: [LoginModule, CreatorModule, QuizModule, QuestionModule, AnswerModule, TagModule, ScoreboardModule, RuncodeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
