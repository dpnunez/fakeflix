import { Injectable } from '@nestjs/common';
import { ContentRepository } from '@src/persistence/repository/content.repository';
import { ContentType } from '../enum/content-type.enum';
import { Movie } from '@src/persistence/entity/movie.entity';
import { Content } from '@src/persistence/entity/content.entity';
import { Video } from '@src/persistence/entity/video.entity';
import { Thumbnail } from '@src/persistence/entity/thumbnail.entity';
import { ExternalRatingClient } from '@src/http/rest/client/rating/external-rating.client';

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
