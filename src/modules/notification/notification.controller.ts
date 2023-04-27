import { Body, Controller, Get, Post } from '@nestjs/common'
import { NotificationService } from './notification.service'

@Controller('notifications')
export class NotificationController {
  constructor (
   readonly notificationService: NotificationService,
  ) {

  }

  @Post('/order')
  async createOrderNotification (
    @Body() body: { name?: string },
  ): Promise<void> {
    return await this.notificationService.createOrderNotification()
  }

  @Get()
  getHello (): string {
    return 'hello notifications'
  }
}
