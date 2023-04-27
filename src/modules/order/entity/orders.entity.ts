import { ChildEntity, ManyToOne, OneToMany } from 'typeorm'
import { ORDER_STATUS } from '../order.enum'
import { Order } from './Order.entity'
import { OrderItemNotification } from '../../notification/entity/notification.order.entity'
import { ICreateOrder } from '../order.interface'

@ChildEntity(ORDER_STATUS.ORDERED)
export class OrderedItem extends Order {
  setOrder (order: ICreateOrder) {
    const { name, description } = order
    this.name = name
    this.description = description
    this.notifications = [new OrderItemNotification()]
  }

  @OneToMany(() => OrderItemNotification, (notification) => notification.order, { cascade: ['insert'] })
  notifications: OrderItemNotification[]
}

@ChildEntity(ORDER_STATUS.CANCELED)
export class CanceledOrder extends Order {
}

@ChildEntity(ORDER_STATUS.COMPLETED)
export class CompletedOrder extends Order {
}
