import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { ResultData} from '../utils/ResultData';
@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
	@Get('/jsonp')
	getJsonP(): string {
	  return `
			test(${Math.random()})
		`;
	}
}
