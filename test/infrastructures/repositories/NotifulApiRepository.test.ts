import {
  FetchNotificationsResponse,
  NotifulApiRepository,
} from 'src/infrastructures/repositories/NotifulApiRepository';
import { FetchMock } from 'test/infrastructures/FetchMock';

describe('NotifulApiRepository tests', () => {
  test('fetchNotifications returns NotificationEntities', async () => {
    // Arrange
    const fetchMock = new FetchMock<FetchNotificationsResponse>([
      {
        id: 'sample id',
        title: 'sample title',
        body: 'sample body',
        alreadyRead: true,
        created: '2021-01-31 00:00:00',
      },
    ]);

    // Act
    const notifulApiRepository = new NotifulApiRepository(fetchMock);
    const notifulEntities = await notifulApiRepository.fetchNotifications();

    // Assert
    expect(notifulEntities).toHaveLength(1);
  });
});
