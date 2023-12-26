import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// npm run start:dev
// main - module - controller - service


// 1. Controller
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
