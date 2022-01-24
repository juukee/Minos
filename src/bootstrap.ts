// import nunjucks from 'nunjucks';
// import path from 'path';
// import { MyLoggerService } from './commom/logger.service';
// import { NestExpressApplication } from '@nestjs/platform-express';
// import { MyConfigService } from './config/config.service';

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

// export default async function bootstrap(app: NestExpressApplication, listening: boolean = true) {
//     const configService: MyConfigService = app.get(MyConfigService);
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

//     if (listening) {
//         await app.listen(configService.server.port);
//         myLoggerService.info({
//             message: 'Nest application successfully started',
//         });
//     }
// }
