import { Module } from '@nestjs/common';
import { LoginController } from '../controllers/login.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    // ...answerProviders,
    // AnswerService,
  ],
  controllers: [LoginController]
})
export class LoginModule {}