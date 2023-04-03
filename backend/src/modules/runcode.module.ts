import { Module } from '@nestjs/common';
import { quizProviders } from 'src/providers/quiz.providers';
import { tagProviders } from 'src/providers/tag.providers';
import { QuizService } from 'src/services/quiz.service';
import { TagService } from 'src/services/tag.service';
import { RuncodeController } from '../controllers/runcode.controller';
import { DatabaseModule } from '../database/database.module';
import { runcodeProviders } from '../providers/runcode.providers';
import { RuncodeService } from '../services/runcode.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...runcodeProviders,
    ...quizProviders,
    ...tagProviders,
    RuncodeService,
    QuizService,
    TagService,
  ],
  controllers: [RuncodeController]
})
export class RuncodeModule {}
