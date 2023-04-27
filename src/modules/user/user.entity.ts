import { ChildEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, TableInheritance } from 'typeorm'
import { USER_TYPE } from './enum/user.enum'

@Entity()
@TableInheritance({ column: { type: 'varchar',  enum: USER_TYPE, name: 'type' } })
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: 20, nullable: false })
  username: string

  @Column({ type: 'varchar', length: 20, nullable: false })
  name: string

  @Column({ type: 'varchar', length: 20, nullable: false })
  phone: string

  @Column({ type: 'varchar', length: 20, nullable: false })
  email: string

  @Column({ type: 'varchar', length: 20, nullable: false, enum: USER_TYPE })
  type: USER_TYPE
}

@ChildEntity()
export class Admin extends User {}

@ChildEntity()
export class Staff extends User {
  @Column({ type: 'int4', nullable: true })
  manager_id: number

  @ManyToOne(() => User)
  manager?: User
}

@ChildEntity()
export class Manager extends User {
  @Column({ type: 'varchar', length: 20, nullable: false })
  position: string

  @OneToMany(() => Staff, (subordinate) => subordinate.manager)
  subordinates?: Staff[]
}
