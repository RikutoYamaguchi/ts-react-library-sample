import { injectable } from 'tsyringe';

@injectable()
export class Fetch {
  constructor(private readonly baseUrl: string) {}

  async get<R, B = Record<string, string> | null>(
    path: string,
    body?: B,
    headers?: HeadersInit
  ): Promise<[R, Headers]> {
    return await this.request<R, B>(path, 'GET', body, headers);
  }

  async post<R, B = Record<string, string> | null>(
    path: string,
    body?: B,
    headers?: HeadersInit
  ): Promise<[R, Headers]> {
    return await this.request<R, B>(path, 'POST', body, headers);
  }

  protected async request<R, B = Record<string, string> | null>(
    path: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    body?: B | undefined,
    headers?: HeadersInit
  ): Promise<[R, Headers]> {
    const response = await fetch(this.baseUrl + path, {
      method,
      body: body === null ? undefined : JSON.stringify(body),
      headers,
    });
    const responseBody = (await response.json()) as R;
    const responseHeaders = response.headers;
    return [responseBody, responseHeaders];
  }
}
