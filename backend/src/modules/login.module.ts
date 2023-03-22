import { Module } from '@nestjs/common';
import { creatorProviders } from 'src/providers/creator.providers';
import { CreatorService } from 'src/services/creator.service';
import { LoginController } from '../controllers/login.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...creatorProviders,
    CreatorService,
  ],
  controllers: [LoginController]
})
export class LoginModule {}