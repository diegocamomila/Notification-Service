import { Module } from '@nestjs/common';
import { Notification } from 'src/application/entities/notification';
import { SendNotification } from 'src/application/use-case/send-notification';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [Notification],
  providers: [SendNotification],
})
export class HttpModule {}
