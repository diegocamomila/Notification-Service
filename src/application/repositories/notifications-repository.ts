import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract save(notifications: Notification): Promise<void>;
  abstract countManyByRecipientId(notification: any): Promise<number>;
}
