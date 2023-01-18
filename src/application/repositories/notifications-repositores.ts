import { Notification } from '../entities/notification';

export abstract class NotificationRepository {
  abstract creat(notification: Notification): Promise<void>;
}
