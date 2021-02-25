import { FetchNotificationsUsecase } from 'src/domains/usecases/FetchNotificationsUsecase';
import { container, injectable } from 'tsyringe';
import { NotifulApiRepository } from 'src/infrastructures/repositories/NotifulApiRepository';
import { NotificationEntity } from 'src/domains/entities/NotificationEntity';

@injectable()
class NotifulApiRepositoryMock extends NotifulApiRepository {
  async fetchNotifications(): Promise<NotificationEntity[]> {
    return [
      new NotificationEntity({
        alreadyRead: false,
        body: '',
        created: '',
        id: '',
        title: '',
      }),
    ];
  }
}

describe('FetchNotificationsUsecase', () => {
  test('execute returns NotificationEntity[]', async () => {
    // Arrange
    const mockRepository = container.resolve(NotifulApiRepositoryMock);

    // Act
    const usecase = new FetchNotificationsUsecase(mockRepository);
    const result = await usecase.execute();

    // Assert
    expect(result).toHaveLength(1);
  });
});
