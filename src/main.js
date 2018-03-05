require('babel-core/register');
require('babel-polyfill');

import * as express from 'express';
import * as path from 'path';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);

  app.use(express.static(path.join(__dirname, 'public')));
  app.set('views', __dirname + '/views');
  app.set('view engine', 'pug');

  await app.listen(3000);
}
bootstrap();
