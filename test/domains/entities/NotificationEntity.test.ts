import { NotificationEntity } from 'src/domains/entities/NotificationEntity';

describe('NotificationEntity tests', () => {
  test('create NotificationEntity without error', () => {
    const notificationEntity = new NotificationEntity({
      id: 'sample_id',
      title: 'sample title',
      body: 'sample body',
      alreadyRead: false,
      created: '2021-01-31 00:00:00',
    });

    expect(notificationEntity.id).toEqual('sample_id');
    expect(notificationEntity.title).toEqual('sample title');
    expect(notificationEntity.body).toEqual('sample body');
    expect(notificationEntity.alreadyRead).toBeFalsy();
    expect(notificationEntity.created).toEqual('2021-01-31 00:00:00');
  });
});
