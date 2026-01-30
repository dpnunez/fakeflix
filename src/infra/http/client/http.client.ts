import { Injectable } from '@nestjs/common';

@Injectable()
export class HttpClient {
  async get<T>(url: string, options: Record<string, any>): Promise<T> {
    const res = await fetch(url, options);

    console.log(res);
    if (!res.ok) {
      const errorMessage = await res.text(); // or res.json() if the response is a JSON object
      throw new Error(`Failed to fetch ${errorMessage}`);
    }

    const responseJson = await res.json();
    console.log(responseJson);
    return responseJson as T;
  }
}