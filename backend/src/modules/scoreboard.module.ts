import { Module } from '@nestjs/common';
import { ScoreboardController } from '../controllers/scoreboard.controller';
import { DatabaseModule } from '../database/database.module';
import { scoreboardProviders } from '../providers/scoreboard.providers';
import { ScoreboardService } from '../services/scoreboard.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...scoreboardProviders,
    ScoreboardService,
  ],
  controllers: [ScoreboardController]
})
export class ScoreboardModule {}
