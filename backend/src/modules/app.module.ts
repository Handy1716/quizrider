import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { AuthModule } from './auth.module';
import { AnswerModule } from './answer.module';
import { CreatorModule } from './creator.module';
import { LoginModule } from './login.module';
import { QuestionModule } from './question.module';
import { QuizModule } from './quiz.module';
import { RuncodeModule } from './runcode.module';
import { ScoreboardModule } from './scoreboard.module';
import { TagModule } from './tag.module';
import { JwtAuthStrategy } from 'src/providers/auth.providers';
import { ConfigModule } from '@nestjs/config/dist';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['env/.env', 'env/.env.dev'],
      isGlobal: true,
    }),
    AuthModule,
    CreatorModule,
    LoginModule,
    QuizModule,
    QuestionModule,
    AnswerModule,
    TagModule,
    ScoreboardModule,
    RuncodeModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtAuthStrategy],
})
export class AppModule {}
