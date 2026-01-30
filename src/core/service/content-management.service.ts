import { Injectable } from '@nestjs/common';
import { ContentRepository } from '@src/persistence/repository/content.repository';
import { ContentType } from '../enum/content-type.enum';
import { Movie } from '@src/persistence/entity/movie.entity';
import { Content } from '@src/persistence/entity/content.entity';
import { Video } from '@src/persistence/entity/video.entity';
import { Thumbnail } from '@src/persistence/entity/thumbnail.entity';

export interface CreadteMovieData {
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  sizeInKb: number;
}

@Injectable()
export class ContentManagementService {
  constructor(private readonly contentRepository: ContentRepository) {}

  async createMovie(
    createMovieData: CreadteMovieData,
  ): Promise<Content> {
    const contentEntity = new Content({
      type: ContentType.MOVIE,
      title: createMovieData.title,
      description: createMovieData.description,
      movie: new Movie({
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
