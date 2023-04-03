import { Module } from '@nestjs/common';
import { runcodeProviders } from 'src/providers/runcode.providers';
import { RuncodeService } from 'src/services/runcode.service';
import { ScoreboardController } from '../controllers/scoreboard.controller';
import { DatabaseModule } from '../database/database.module';
import { scoreboardProviders } from '../providers/scoreboard.providers';
import { ScoreboardService } from '../services/scoreboard.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...scoreboardProviders,
    ...runcodeProviders,
    ScoreboardService,
    RuncodeService,
  ],
  controllers: [ScoreboardController]
})
export class ScoreboardModule {}
