import { FetchMock } from 'test/infrastructures/FetchMock';

describe('Fetch tests', () => {
  test('get returns data from request returns', async () => {
    // Arrange
    const fetch = new FetchMock<{ Body: string }>({ Body: 'test' });

    // Act
    const [responseBody, responseHeader] = await fetch.get('');

    // Assert
    expect(responseBody).toEqual({ Body: 'test' });
    expect(responseHeader).toEqual({ Header: 'test' });
  });

  test('post returns data from request returns', async () => {
    // Arrange
    const fetch = new FetchMock<{ Body: string }>({ Body: 'test' });

    // Act
    const [responseBody, responseHeader] = await fetch.post('');

    // Assert
    expect(responseBody).toEqual({ Body: 'test' });
    expect(responseHeader).toEqual({ Header: 'test' });
  });
});
