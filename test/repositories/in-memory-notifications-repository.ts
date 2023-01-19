import { Notification } from 'src/application/entities/notification';
import { NotificationRepository } from 'src/application/repositories/notifications-repositores';

export class InMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async creat(notification: Notification) {
    this.notifications.push(notification);
  }
}
