import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController], //express의 router같은 역할
  providers: [AppService],
})
export class AppModule {}
