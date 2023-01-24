import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  static create(notification: Notification) {
    throw new Error('Method not implemented.');
  }
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract save(notifications: Notification): Promise<void>;
}
