import { Module } from '@nestjs/common'
import { OrderController } from './order.controller'
import { OrderService } from './order.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Order } from './entity/Order.entity'
import { OrderRepository } from './order.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  controllers: [OrderController],
  providers: [OrderService, OrderRepository],
  exports: [OrderRepository],
})
export class OrderModule {
}
