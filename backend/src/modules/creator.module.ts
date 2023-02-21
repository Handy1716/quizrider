import { Module } from '@nestjs/common';
import { CreatorController } from 'src/controllers/creator.controller';
import { DatabaseModule } from '../database/database.module';
import { creatorProviders } from '../providers/creator.providers';
import { CreatorService } from '../services/creator.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...creatorProviders,
    CreatorService,
  ],
  controllers: [CreatorController]
})
export class CreatorModule {}
