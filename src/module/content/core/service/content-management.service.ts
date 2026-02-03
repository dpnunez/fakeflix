import { Injectable } from '@nestjs/common';
import { ContentType } from '@contentModule/core/enum/content-type.enum';
import { ExternalRatingClient } from '@contentModule/http/rest/client/rating/external-rating.client';
import { ContentRepository } from '@contentModule/persistence/repository/content.repository';
import { Content } from '@contentModule/persistence/entity/content.entity';
import { Movie } from '@contentModule/persistence/entity/movie.entity';
import { Video } from '@contentModule/persistence/entity/video.entity';
import { Thumbnail } from '@contentModule/persistence/entity/thumbnail.entity';

export interface CreadteMovieData {
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  sizeInKb: number;
}

@Injectable()
export class ContentManagementService {
  constructor(private readonly contentRepository: ContentRepository, private readonly externalMovieRatingClient: ExternalRatingClient) {}

  async createMovie(
    createMovieData: CreadteMovieData,
  ): Promise<Content> {
    const externalRating = await this.externalMovieRatingClient.getRating(createMovieData.title);
    
    const contentEntity = new Content({
      type: ContentType.MOVIE,
      title: createMovieData.title,
      description: createMovieData.description,
      movie: new Movie({
        externalRating,
        video: new Video({
          url: createMovieData.url,
          sizeInKb: createMovieData.sizeInKb,
          duration: 100,
        }),
      }),
    });

    if(createMovieData.thumbnailUrl) {
      contentEntity.movie.thumbnail = new Thumbnail({
        url: createMovieData.thumbnailUrl,
      });
    }

    const content = await this.contentRepository.save(contentEntity);

    return content;
  }
}
