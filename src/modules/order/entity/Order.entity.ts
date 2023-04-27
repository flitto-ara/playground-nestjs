import { Column, Entity, JoinColumn, OneToOne, TableInheritance } from 'typeorm'
import { BaseEntity } from '../../../common/entity/base.entity'
import { ORDER_STATUS } from '../order.enum'
import { Refund } from '../../refund/refund.entity'

@Entity()
@TableInheritance({ column: { type: 'varchar', enum: ORDER_STATUS, name: 'status' } })
export class Order extends BaseEntity {
  @Column({ type: 'varchar', length: 200, nullable: false })
  name: string

  @Column({ type: 'varchar', length: 200, nullable: false })
  description: string

  @Column({
    type: 'varchar',
    length: 20,
    enum: ORDER_STATUS,
    nullable: false,
    default: ORDER_STATUS.ORDERED,
  })
  status: ORDER_STATUS

  @Column({ type: 'int4', nullable: true })
  refund_id: number

  @OneToOne(() => Refund, (refund) => refund.order)
  @JoinColumn({ name: 'refund_id' })
  refund?: Refund
}
