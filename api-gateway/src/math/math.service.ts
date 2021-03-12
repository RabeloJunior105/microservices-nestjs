import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class MathService {
  private client: ClientProxy;
  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8877,
      },
    });
  }
  async sum(data: number[]) {
    const teste = this.client.send<number, number[]>({ cmd: 'sum' }, data);

    return teste
  }
}

/**
const microserviceOptions: ClientOptions = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: 8877,
  },
};

const client = ClientProxyFactory.create(microserviceOptions);

client
  .send<number, number[]>({ cmd: 'sum' }, [1, 2, 3,12,432])
  .subscribe((result) => logger.log(result));
 


 */
