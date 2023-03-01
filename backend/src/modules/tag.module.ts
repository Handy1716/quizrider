import { Module } from '@nestjs/common';
import { TagController } from 'src/controllers/tag.controller';
import { DatabaseModule } from '../database/database.module';
import { tagProviders } from '../providers/tag.providers';
import { TagService } from '../services/tag.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...tagProviders,
    TagService,
  ],
  controllers: [TagController]
})
export class TagModule {}
