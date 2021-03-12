import { Module } from '@nestjs/common';
import { MathService } from './math.service';
import { MathController } from './math.controller';
import { ClientProxy } from '@nestjs/microservices';

@Module({
  imports: [],
  providers: [MathService],
  controllers: [MathController],
})
export class MathModule {}
