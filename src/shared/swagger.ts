import { DocumentBuilder } from '@nestjs/swagger';

export const configSwagger = new DocumentBuilder()
  .setTitle('ND API')
  .setDescription('The ND API description')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
