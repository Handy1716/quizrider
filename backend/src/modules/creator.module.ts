import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { creatorProviders } from '../providers/creator.providers';
import { CreatorService } from '../services/creator.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...creatorProviders,
    CreatorService,
  ],
})
export class CreatorModule {}
