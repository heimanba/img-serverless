import {NestFactory} from '@nestjs/core';
import {NestExpressApplication} from '@nestjs/platform-express';
import {join} from 'path';
import {AppModule} from './app.module';

const bootstrap = async () => {

  const app = await NestFactory.create<NestExpressApplication>(
      AppModule,
  );
  app.useStaticAssets(join(__dirname, '..', 'public'));
  await app.listen(9000);
}

bootstrap().then()
