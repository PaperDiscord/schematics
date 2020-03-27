/**
 * This will load up the Token from the .env file
 */
if (!process.env.TOKEN) require('dotenv').config();

import { PaperFactory } from '@paperdiscord/core';
import { AppModule } from './app.module';

const bootstrap = async () => {
  const app = await PaperFactory.create(AppModule);

  await app.login(process.env.TOKEN);
};

bootstrap();
