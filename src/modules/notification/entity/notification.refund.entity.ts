import { ChildEntity } from 'typeorm'
import { REFUND_ACTION_TYPE } from '../notification.enum'
import { RefundNotification } from './Notification.entity'

@ChildEntity(REFUND_ACTION_TYPE.REFUND_REQUEST)
export class RefundRequestNotification extends RefundNotification {}

@ChildEntity(REFUND_ACTION_TYPE.REFUND_COMPLETE)
export class CompleteRequestNotification extends RefundNotification {}
