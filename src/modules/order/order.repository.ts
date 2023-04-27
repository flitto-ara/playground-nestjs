import { InjectRepository } from '@nestjs/typeorm'
import { Injectable } from '@nestjs/common'
import { Order } from './entity/Order.entity'
import { Repository } from 'typeorm'
import { ICreateOrder } from './order.interface'
import { OrderedItem } from './entity/orders.entity'
import { OrderItemNotification } from '../notification/entity/notification.order.entity'

@Injectable()
export class OrderRepository extends Repository<Order> {
  constructor (
    @InjectRepository(Order)
    private readonly repository: Repository<Order>,
  ) {
    super(
      repository.target,
      repository.manager,
      repository.queryRunner,
    )
  }

  async createOrder (order: ICreateOrder): Promise<Order> {
    const orderEntity = new OrderedItem()
    orderEntity.setOrder(order)
    return await this.repository.save(orderEntity)
  }

  // async cancelOrder (orderId): Promise<Order> {
  // const order = this.
  // }
}
