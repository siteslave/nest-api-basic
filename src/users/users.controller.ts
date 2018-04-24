import { Controller, Get, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { ForbiddenException } from 'forbidden/forbidden.exception';

@Controller('users')
export class UsersController {

  constructor(private userService: UsersService) {}

  @Get()
  async root() {
    let rs: any = await this.userService.login();
    return rs;
  }

  @Get('/test-exp')
  async create(@Body() body) {
    throw new ForbiddenException();
  }
}
