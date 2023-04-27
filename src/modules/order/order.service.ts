import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ICreateOrder } from './order.interface'
import { Order } from './entity/Order.entity'
import { OrderRepository } from './order.repository'

@Injectable()
export class OrderService {
  constructor (
    private readonly orderRepository: OrderRepository,
  ) {
  }

  async createOrder (options: ICreateOrder){
    console.log('inservice')
    await this.orderRepository.createOrder(options)
    return
  }
}
