import { NotificationEntity } from 'src/domains/entities/NotificationEntity';
import { inject, injectable } from 'tsyringe';
import { NotifulApiRepository } from 'src/domains/repositories/NotifulApiRepository';

@injectable()
export class FetchNotificationsUsecase {
  repository: NotifulApiRepository;

  constructor(
    @inject('NotifulApiRepository') repository: NotifulApiRepository
  ) {
    this.repository = repository;
  }

  async execute(): Promise<NotificationEntity[]> {
    return this.repository.fetchNotifications();
  }
}
