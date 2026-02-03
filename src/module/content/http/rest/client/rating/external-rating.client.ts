import { Injectable } from "@nestjs/common";
import { HttpClient } from "@contentModule/infra/http/client/http.client";
import { ConfigService } from "@sharedModule/config/service/config.service";

interface ApiResponse<T> {
  results: T[];
}

@Injectable()
export class ExternalRatingClient {

  constructor(private readonly httpClient: HttpClient, private readonly configService: ConfigService) {}
  async getRating(title: string): Promise<number | undefined> {
    const keywordId = await this.stringToKeywordId(title)

    if (!keywordId) {
      return undefined;
    }

    const apiResponse = await this.fetch<{ vote_average: number }>(
        `/discover/movie?with_keywords=${keywordId}`,
      );

    return apiResponse.results.length > 0
      ? apiResponse.results[0].vote_average
      : undefined;
  }

  private async stringToKeywordId(
    keyword: string,
  ): Promise<string | undefined> {
    const apiResponse = await this.fetch<{ id: string }>(
      `/search/keyword?query=${encodeURI(keyword)}&page=1`,
    );

    return apiResponse.results.length > 0
      ? apiResponse.results[0].id
      : undefined;
  }



  private async fetch<T extends Record<string, any>>(path: string): Promise<ApiResponse<T>> {
    const apiToken = this.configService.get('movieDb').apiToken;
    const apiUrl = this.configService.get('movieDb').url
    const url = `${apiUrl}${path}`;
    const options = {
        headers: {
            'Authorization': `Bearer ${apiToken}`,
            'Content-Type': 'application/json',
        },
    }
    return this.httpClient.get<ApiResponse<T>>(url, options);
  }
}