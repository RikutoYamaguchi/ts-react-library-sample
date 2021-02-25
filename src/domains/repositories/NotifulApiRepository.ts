import { NotificationEntity } from 'src/domains/entities/NotificationEntity';

export interface NotifulApiRepository {
  fetchNotifications(): Promise<NotificationEntity[]>;
}
