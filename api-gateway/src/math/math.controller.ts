import { Controller, Get } from '@nestjs/common';
import { MathService } from './math.service';

@Controller('math')
export class MathController {
  constructor(private mathService: MathService) {}

  @Get()
  async sum() {
    return await this.mathService.sum([1,2,3,4,5]);
  }
}
