import { Module } from '@nestjs/common';
import { MyLoggerService } from './logger.service';
import { TcbService } from './tcb.service';

@Module({
    imports: [],
    providers: [TcbService,MyLoggerService],
})
export class CommomModule {}
