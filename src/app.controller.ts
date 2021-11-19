import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello') //아래 줄과 붙어있어야 한다 @Get 이런걸 decorater라고 부름
  sayHello(): string {
    return 'Hello everyone';
  }
}
