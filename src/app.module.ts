import { Module } from '@nestjs/common';
import { MyConfigModule } from './config/MyConfig.module';

@Module({
  imports: [MyConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
