import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { AllExceptionsFilter } from './core/any-exception.filter';

export default async function bootstrap(app: NestExpressApplication) {   
      const configService:ConfigService = app.get(ConfigService); 
      const port = configService.get('port');
      // 隐藏 x-powered-by: express header
      app.disable('x-powered-by');
      app.useGlobalFilters(new AllExceptionsFilter());
//     const myLoggerService: MyLoggerService = app.get(MyLoggerService);
//     myLoggerService.info({
//         message: 'Starting Nest application...',
//         data: {
//             NODE_ENV: process.env.NODE_ENV,
//             port: configService.get<String>('database.port'),
//         },
//     });

//     // app.useGlobalPipes(new ValidateDtoPipe(configService));
//     // app.useGlobalInterceptors(new TransformResInterceptor(configService, myLoggerService));
//     // app.useGlobalFilters(new GlobalExceptionFilter(configService, myLoggerService));

//     initView(app);

      // 兼容云函数与本地开发
      if (process.env.NODE_ENV === 'development') {
            await app.listen(port);
      } else {
            await app.init();
      }
      // 兼容cloudstudio
      console.log(`App listen on https://txvpto-dafdkt-${port}.preview.myide.io`);
      // 本地环境
      console.log(`App listen on http://localhost:${port}`);

}


