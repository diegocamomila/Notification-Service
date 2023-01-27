import { CancelNotification } from '@application/use-case/cancel-notification';
import { CountRecipientNotification } from '@application/use-case/count-recipient-notifications';
import { SendNotification } from '@application/use-case/send-notification';
import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notification.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification, CancelNotification, CountRecipientNotification],
})
export class HttpModule {}
