import { Module } from '@nestjs/common';
import { RuncodeController } from '../controllers/runcode.controller';
import { DatabaseModule } from '../database/database.module';
import { runcodeProviders } from '../providers/runcode.providers';
import { RuncodeService } from '../services/runcode.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...runcodeProviders,
    RuncodeService,
  ],
  controllers: [RuncodeController]
})
export class RuncodeModule {}
