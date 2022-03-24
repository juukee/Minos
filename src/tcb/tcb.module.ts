import { Module } from '@nestjs/common';
import TcbService from './tcb.service';

@Module({
  imports: [],

  providers: [TcbService],
})
export class TcbModule {}


