import CloudBase from '@cloudbase/manager-node';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class TcbService {
    const app = CloudBase.init({
        secretId: 'AKIDPmy5zoVovNccacwzKPuESRAey2qnJ8Tj',
        secretKey: 'BGJEftsfHfsqopcATcjgQuVDgv51oMeE',
        envId: 'fscz-faca0' // 云环境 ID，可在腾讯云-云开发控制台获取
    });
    const { database, functions, storage, env, commonService } = app;
    
    
}