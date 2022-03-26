import CloudBase from '@cloudbase/manager-node'
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TcbService extends CloudBase {
    constructor(private readonly configService: ConfigService) {
        super();
        this.init();
    }
    private init() {
        let CloudBaseConfig = {}
        // 兼容云函数与本地开发 开发环境代表本地模式，正式环境代表云函数模式
        if (process.env.NODE_ENV === 'development') {
            CloudBaseConfig = {
                secretId: this.configService.get('secretId'),
                secretKey: this.configService.get('secretKey'),
                envId: this.configService.get('envId') // 云环境 ID，可在腾讯云-云开发控制台获取
            }
        } else {
            CloudBaseConfig = {
                envId: this.configService.get('envId') // 云环境 ID，可在腾讯云-云开发控制台获取
            }
        }
        const app = CloudBase.init(CloudBaseConfig);
        return app;
    }
}


