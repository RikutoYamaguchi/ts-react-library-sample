import { NotifulApiRepository as INotifulApiRepository } from 'src/domains/repositories/NotifulApiRepository';
import { inject, injectable } from 'tsyringe';
import { Fetch } from 'src/infrastructures/Fetch';
import { NotificationEntity } from 'src/domains/entities/NotificationEntity';

export type FetchNotificationsResponse = {
  id: string;
  title: string;
  body: string;
  alreadyRead: boolean;
  created: string;
}[];

@injectable()
export class NotifulApiRepository implements INotifulApiRepository {
  protected fetch: Fetch;

  constructor(@inject('Fetch') fetch: Fetch) {
    this.fetch = fetch;
  }

  async fetchNotifications(): Promise<NotificationEntity[]> {
    const [responseBody] = await this.fetch.get<FetchNotificationsResponse>(
      '/notifications',
      {},
      {}
    );

    return responseBody.map((body) => {
      return new NotificationEntity({
        id: body.id,
        title: body.title,
        body: body.body,
        alreadyRead: body.alreadyRead,
        created: body.created,
      });
    });
  }
}
