import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
   });
   app.use(helmet());
   app.setGlobalPrefix('api');
   app.useGlobalPipes(new ValidationPipe());
   app.enableCors();
   await app.listen(3000);
  }
  

bootstrap();
