import { ChildEntity, JoinColumn, ManyToOne } from 'typeorm'
import { ORDER_ACTION_TYPE } from '../notification.enum'
import { OrderNotification } from './Notification.entity'
import { OrderedItem } from '../../order/entity/orders.entity'

@ChildEntity(ORDER_ACTION_TYPE.ORDER_ORDER)
export class OrderItemNotification extends OrderNotification {
  @ManyToOne(() => OrderedItem, (order) => order.notifications)
  @JoinColumn({ name: 'order_id' })
  order: OrderedItem
}

@ChildEntity(ORDER_ACTION_TYPE.ORDER_CANCEL)
export class CancelOrderNotification extends OrderNotification {
}

@ChildEntity(ORDER_ACTION_TYPE.ORDER_COMPLETE)
export class CompleteOrderNotification extends OrderNotification {
}

@ChildEntity(ORDER_ACTION_TYPE.ORDER_DELIVERY)
export class DeliveryOrderNotification extends OrderNotification {
}

@ChildEntity(ORDER_ACTION_TYPE.ORDER_QUESTION)
export class QuestionOrderNotification extends OrderNotification {
}

@ChildEntity(ORDER_ACTION_TYPE.ORDER_UPDATE_RECEIVER_INFO)
export class UpdateReceiverInfoOrderNotification extends OrderNotification {
}

