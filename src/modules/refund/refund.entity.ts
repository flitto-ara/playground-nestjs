import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { BaseEntity } from '../../common/entity/base.entity'
import { Order } from '../order/entity/Order.entity'

@Entity()
export class Refund extends BaseEntity {
  @Column({ type: 'int4', nullable: false })
  order_id: number

  @Column({ type: 'varchar', length: 200, nullable: true })
  reason: string

  @OneToOne(() => Order, (order) => order.refund)
  @JoinColumn({ name: 'order_id' })
  order?: Order // undefined 일 수는 있어도 null일 수는 없다.
}
