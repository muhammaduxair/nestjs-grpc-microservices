import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { usersClientOptions } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice(usersClientOptions);
  await app.startAllMicroservices();

  await app.listen(3000);
}
bootstrap();
