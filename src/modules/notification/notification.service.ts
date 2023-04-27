import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Notification } from './entity/Notification.entity'
import { ORDER_ACTION_TYPE } from './notification.enum'

@Injectable()
export class NotificationService {
  constructor (
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>,
  ) {
  }

  async createOrderNotification () {
    await this.notificationRepository.save({
      order_id: 1,
      action_type: ORDER_ACTION_TYPE.ORDER_ORDER,
    })
  }
}
