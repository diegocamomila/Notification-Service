import { InMemoryNotificationRepository } from 'test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('SEnd notification', () => {
  it('shoud be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'exemple-recipientId',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
  });
});
