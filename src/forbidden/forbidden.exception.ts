import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException {
  constructor() {
    super('ไม่มีสิทธิ์เข้าใช้งาน', HttpStatus.NOT_FOUND);
  }
}
