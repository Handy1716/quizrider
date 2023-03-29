import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.getOrThrow("NEST_PORT");
  console.log('port', port);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }));
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
