// import { ChildEntity, Column, Entity, JoinColumn, ManyToOne, TableInheritance } from 'typeorm'
// import { BaseEntity } from '../../common/entity/base.entity'
// import { Refund } from '../refund/refund.entity'
// import { ORDER_ACTION_TYPE, REFUND_ACTION_TYPE } from './notification.enum'
// import { Order } from '../order/entity/Order.entity'
//
// @Entity()
// @TableInheritance({ column: { type: 'varchar', name: 'action_type' } })
// export abstract class Notification extends BaseEntity {
//   // @Column({ type: 'int4', nullable: true })
//   // order_id: number | null
//
//   @Column({ type: 'int4', nullable: true })
//   refund_id: number | null
//
//   @Column({ type: 'varchar', length: 20, enum: ORDER_ACTION_TYPE && REFUND_ACTION_TYPE, nullable: true })
//   action_type: ORDER_ACTION_TYPE | REFUND_ACTION_TYPE
//
//   // @ManyToOne(() => Order, { eager: true })
//   // @JoinColumn({ name: 'order_id' })
//   // order?: Order | null
//
//   @ManyToOne(() => Refund, { eager: true })
//   @JoinColumn({ name: 'refund_id' })
//   refund?: Refund | null
// }
//
// export class OrderNotification extends Notification {
//   @ManyToOne(() => Order, { eager: true })
//   @JoinColumn({ name: 'order_id' })
//   order: Order
//
//   @Column({ type: 'int4', nullable: true })
//   order_id: number
// }
//
//
// export class RefundNotification extends Notification {
//   @ManyToOne(() => Refund, { eager: true })
//   @JoinColumn({ name: 'refund_id' })
//   refund: Refund
// }
