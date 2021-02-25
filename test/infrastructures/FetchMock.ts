import { Fetch } from 'src/infrastructures/Fetch';

export class FetchMock<T> extends Fetch {
  mockData: T;
  constructor(mockData: T) {
    super('');
    this.mockData = mockData;
  }

  protected async request<R = T, B = Record<string, string> | null>(
    _path: string,
    _method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    _body?: B | undefined,
    _headers?: HeadersInit
  ): Promise<[R, Headers]> {
    const responseBody = JSON.parse(JSON.stringify(this.mockData)) as R;
    const responseHeaders = JSON.parse(`{
          "Header": "test"
        }`) as Headers;
    return [responseBody, responseHeaders];
  }
}
