import { ChildEntity, Column, Entity, JoinColumn, ManyToOne, TableInheritance } from 'typeorm'
import { ORDER_ACTION_TYPE, REFUND_ACTION_TYPE } from '../notification.enum'
import { Refund } from '../../refund/refund.entity'
import { BaseEntity } from '../../../common/entity/base.entity'

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'action_type' } })
export class Notification extends BaseEntity {
  static generateMessage () {
    return `random message ${Math.floor(Math.random() * 9)}`
  }

  @Column({ type: 'boolean', nullable: false, default: false })
  is_read: boolean

  @Column({ type: 'timestamptz', nullable: true })
  read_at: Date | null

  @Column({ type: 'int4', nullable: true })
  refund_id: number | null

  @Column({ type: 'varchar', length: 20, enum: ORDER_ACTION_TYPE && REFUND_ACTION_TYPE, nullable: true })
  action_type: ORDER_ACTION_TYPE | REFUND_ACTION_TYPE

  @Column({ type: 'text', nullable: true })
  message: string | null
}

@ChildEntity()
export class OrderNotification extends Notification {
  @Column({ type: 'int4', nullable: true })
  order_id: number
}

@ChildEntity()
export class RefundNotification extends Notification {
  @Column({ type: 'int4', nullable: true })
  refund_id: number

  @ManyToOne(() => Refund, { eager: true })
  @JoinColumn({ name: 'refund_id' })
  refund: Refund
}
