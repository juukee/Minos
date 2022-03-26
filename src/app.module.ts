import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommomModule } from './commom/commom.module';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';

@Module({
imports: [
    ConfigModule.forRoot({
      // ignoreEnvFile: true,
      envFilePath: [`.${process.env.NODE_ENV || 'development'}.env`,'.env'],
      expandVariables: true, // 扩展变量
      cache: true,
      isGlobal: true,
      load: [appConfig, databaseConfig],
    }),
    CommomModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule{}
