import { CancelNotification } from '@application/use-case/cancel-notification';
import { CountRecipientNotification } from '@application/use-case/count-recipient-notifications';
import { GetRecipientNotification } from '@application/use-case/get-recipient-notifications';
import { ReadNotification } from '@application/use-case/read-notification';
import { SendNotification } from '@application/use-case/send-notification';
import { UnReadNotification } from '@application/use-case/unread-notification';
import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notification.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotification,
    ReadNotification,
    UnReadNotification,
    GetRecipientNotification,
  ],
})
export class HttpModule {}
