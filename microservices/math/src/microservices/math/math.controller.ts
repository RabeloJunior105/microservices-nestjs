import { Controller, Get, Logger } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
const logger = new Logger("math");

@Controller("math")
export class MathController {
  @MessagePattern({ cmd: "sum" })
  accumulate(data: number[]): number {
    logger.log("ei man, chamaram o metodo aqui ó");
    return (data || []).reduce((a, b) => a + b);
  }
}
