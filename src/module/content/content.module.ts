import { Module } from '@nestjs/common';
import { PersistenceModule } from './persistence/persistence.module';
import { ConfigModule } from '@sharedModules/config/config.module';
import { AdminMovieController } from './http/rest/controller/admin-movie.controller';
import { MediaPlayerController } from './http/rest/controller/media-player.controller';
import { ContentManagementService } from './core/service/content-management.service';
import { MediaPlayerService } from './core/service/media-player.service';
import { ContentRepository } from './persistence/repository/content.repository';
import { VideoRepository } from './persistence/repository/video.repository';
import { ExternalRatingClient } from './http/rest/client/rating/external-rating.client';
import { HttpClientModule } from '@sharedModules/http-client/http-client.module';

@Module({
  imports: [
    PersistenceModule.forRoot(),
    ConfigModule.forRoot(),
    HttpClientModule,
  ],
  controllers: [AdminMovieController, MediaPlayerController],
  providers: [
    ContentManagementService,
    MediaPlayerService,
    ContentRepository,
    VideoRepository,
    ExternalRatingClient,
  ],
})
export class ContentModule {}
