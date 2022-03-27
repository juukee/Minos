import moment from 'moment';
import { TcbService } from './tcb.service';
import winston from 'winston';
import path from 'path';

const logPath = path.join(__dirname,'../../logs/');

console.log(logPath);
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: logPath },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: logPath + 'error.log', level: 'error' }),
    new winston.transports.File({ filename: logPath +'combined.log' }),
  ],
});
//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}


class LogData {
  public message?: string;
  public data?: any;
}

export class MyLoggerService {
  constructor(private){}
  private writeLog(logMethod: string, logData: LogData) {
    logData = logData || { message: '', data: {} };
    (logData as any).timeLocal = moment().format('YYYY-MM-DD HH:mm:ss.SSS');
    logger[logMethod](logData);
  }

  debug(logData: LogData) {
    this.writeLog('debug', logData);
  }

  info(logData: LogData) {
    this.writeLog('info', logData);
  }

  async error(logData: LogData) {
    this.writeLog('error', logData);
    console.log(TcbService);
    // 获取数据库实例ID
    // const EnvInfos = await TcbService.env.getEnvInfo();
    // console.log(EnvInfos);
// const Databases  = EnvInfo
// console.log('Databases:', Databases)
// const InsertedIds  =  this.tcb.commonService('flexdb').call({
//   Action: 'PutItem',
//   Param: {
//     TableName: 'coll-1',
//     MgoDocs: [logData],
//     Tag: Databases[0].InstanceId
//   }
// })
// console.log('InsertedIds:', InsertedIds)
  }

  warn(logData: LogData) {
    this.writeLog('warn', logData);
  }

  fatal(logData: LogData) {
    this.writeLog('fatal', logData);
  }
}
