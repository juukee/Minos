import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import { AppModule } from './app.module';
import bootstrap from './bootstrap';

const expressApp = express();
const adapter = new ExpressAdapter(expressApp);

async function main() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    adapter,
  );
  await bootstrap(app);
}

main()