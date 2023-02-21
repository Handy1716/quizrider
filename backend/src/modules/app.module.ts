import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { CreatorModule } from './creator.module';

@Module({
  imports: [CreatorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}