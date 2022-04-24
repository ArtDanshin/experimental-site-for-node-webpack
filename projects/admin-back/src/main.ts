import * as fs from 'fs';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from '@/modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug']
  });

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('ArtDanshin Blog')
    .setDescription('API админки блога')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  await fs.promises.writeFile('../../schemas/admin-api.json', JSON.stringify(document));

  SwaggerModule.setup('api-swagger', app, document);

  await app.listen(7000);
}

bootstrap();
