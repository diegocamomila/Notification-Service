import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

const notificationRepository = {
  async creat(notification: Notification) {
    console.log(notification);
  },
};

describe('SEnd notification', () => {
  it('shoud be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'exemple-recipientId',
    });
    expect(notification).toBeTruthy();
  });
});
