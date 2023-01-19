import { NotificationsRepository } from '@application/repositories/notifications-repositores';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepositories } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepositories,
    },
  ],
  //exports: [NotificationsRepository],
})
export class DatabaseModule {}
