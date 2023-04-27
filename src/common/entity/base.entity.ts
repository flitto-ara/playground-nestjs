import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn({ type: 'timestamptz', nullable: false })
  created_at: Date

  @UpdateDateColumn({ type: 'timestamptz', nullable: false })
  updated_at: Date
}
