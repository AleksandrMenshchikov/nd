import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
import { GlobalExceptionFilter } from './shared/global-exception.filter';
import { corsOptions } from './shared/cors';
import { SwaggerModule } from '@nestjs/swagger';
import { configSwagger } from './shared/swagger';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.useGlobalFilters(new GlobalExceptionFilter());

  app.use(helmet());

  app.enableCors(corsOptions);

  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('api', app, document);

  await app.listen(8080);
}

bootstrap();
