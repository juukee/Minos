import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MyConfigService } from './config.service';
import appConfig from './config/app';
import databaseConfig from './config/databaseConfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      // envFilePath: [`.${process.env.NODE_ENV || 'development'}.env`],
      expandVariables: true, // 扩展变量
      cache: true,
      isGlobal: true,
      load: [appConfig, databaseConfig],
    }),
  ],

  providers: [MyConfigService],
})
export class MyConfigModule {}
