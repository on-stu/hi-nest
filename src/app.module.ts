import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [MoviesController], //express의 router같은 역할
  providers: [],
})
export class AppModule {}
