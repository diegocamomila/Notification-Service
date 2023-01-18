import { SendNotification } from './send-notification';

describe('SEnd notification', () => {
  it('shoud be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'exemple-recipientId',
    });
    expect(notification).toBeTruthy();
  });
});
