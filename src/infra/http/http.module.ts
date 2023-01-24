import { SendNotification } from '@application/use-case/send-notification';
import { Module } from '@nestjs/common';
import { Notification } from 'src/application/entities/notification';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [Notification],
  providers: [SendNotification],
})
export class HttpModule {}
