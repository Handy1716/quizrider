import { Module } from '@nestjs/common';
import { creatorProviders } from 'src/providers/creator.providers';
import { CreatorService } from 'src/services/creator.service';
import { LoginController } from '../controllers/login.controller';
import { DatabaseModule } from '../database/database.module';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...creatorProviders,
    CreatorService,
    JwtService,
    ConfigService,
  ],
  controllers: [LoginController]
})
export class LoginModule {}