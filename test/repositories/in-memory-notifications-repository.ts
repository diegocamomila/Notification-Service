import { Notification } from 'src/application/entities/notification';
import { NotificationsRepository } from 'src/application/repositories/notifications-repositores';

export class InMemoryNotificationRepository implements NotificationsRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
