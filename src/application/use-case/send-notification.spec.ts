import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

const notifications: Notification[] = [];

const notificationRepository = {
  async creat(notification: Notification) {
    notifications.push(notification);
  },
};

describe('SEnd notification', () => {
  it('shoud be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationRepository);

    await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'exemple-recipientId',
    });

    console.log(notifications);

    expect(notifications).toHaveLength(1);
  });
});
