import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Patch,
  Body,
  Query,
} from '@nestjs/common';

@Controller('movies') // 이게 기본 path를 정해준다. 이 엔드포인트에 접근하려면 /movies로 가야한다.
export class MoviesController {
  @Get()
  getAll() {
    return 'this will return all movies';
  }

  @Get('search') //아래 get보다 위에 있어야 한다. 아니면 search를 id로 받아올 것
  search(@Query('year') searchingYear: string) {
    return `we are searching for a movie made after : ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `this will return one movie with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `this will delete a movie with the id ${movieId}`;
  }

  @Patch('/:id') //put은 리소스의 전체를 업데이트 , patch는 일부분만 업데이트
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
