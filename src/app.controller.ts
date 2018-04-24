import { Get, Controller, Res, Req, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return this.appService.root();
  }

  @Get('/test/:id')
  test(@Req() req, @Res() res): any {
    console.log(req.params);
    res.send({ ok: true, message: 'Hello', id: req.params.id });
  }
}
