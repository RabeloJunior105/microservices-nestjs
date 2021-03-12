import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MathModule } from './microservices/math/math.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [MathModule],
})
export class AppModule {}
