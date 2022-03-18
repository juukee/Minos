// import nunjucks from 'nunjucks';
// import path from 'path';
// import { MyLoggerService } from './commom/logger.service';
import { NestExpressApplication } from '@nestjs/platform-express';
import { MyConfigService } from './config/config.service';
import { AllExceptionsFilter } from './core/any-exception.filter';

// function initView(app: NestExpressApplication) {
//     const configService: MyConfigService = app.get(MyConfigService);
//     const viewPath = path.join(__dirname, '../views');
//     app.setBaseViewsDir(viewPath);
//     app.setViewEngine('njk');
//     const nunjucksEnv = nunjucks.configure(viewPath, {
//         noCache: process.env.NODE_ENV === configService.get('database.DEVELOPMENT'),
//         autoescape: true,
//         express: app,
//     });
//     // for (const key of Object.keys(viewfilter)) {
//     //     nunjucksEnv.addFilter(key, viewfilter[key]);
//     // }
//     // macro中不能访问当前 context , 将要访问的变量加到 global
//     nunjucksEnv.addGlobal('env', configService.env);
//     nunjucksEnv.addGlobal('jsPath', configService.static.jsPath);
// }


export default async function bootstrap(app: NestExpressApplication) {
      const configService = app.get(MyConfigService);
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
      console.log(configService);
      console.log(port);
      // 兼容cloudstudio
      console.log(`App listen on https://txvpto-dafdkt-${port}.preview.myide.io`);
      // 本地环境
      console.log(`App listen on http://localhost:${port}`);

}