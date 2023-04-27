import { Body, Controller, Get, Post } from '@nestjs/common'
import { OrderService } from './order.service'
import { ICreateOrder } from './order.interface'

@Controller('orders')
export class OrderController {
  constructor (
    readonly orderService: OrderService,
  ) {
  }

  @Post()
  async createOrder (
    @Body() body: ICreateOrder,
  ): Promise<void> {
    console.log('create order!')
    return await this.orderService.createOrder(body)
  }

  @Get()
  getHello (): string {
    return 'hello'
  }
}
