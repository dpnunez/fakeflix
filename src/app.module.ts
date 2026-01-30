import { Module } from '@nestjs/common';
import { VideoUploadController } from './http/rest/controller/video-upload.controller';
import { ContentManagementService } from './core/service/content-management.service';
import { MediaPlayerService } from './core/service/media-player.service';
import { ContentRepository } from './persistence/repository/content.repository';
import { MediaPlayerController } from './http/rest/controller/media-player.controller';
import { VideoRepository } from './persistence/repository/video.repository';
import { PersistenceModule } from './persistence/persistence.module';
import { ExternalRatingClient } from './http/rest/client/rating/external-rating.client';
import { HttpClient } from './infra/http/client/http.client';
import { ConfigModule } from './infra/module/config/config.module';

@Module({
  imports: [PersistenceModule.forRoot(), ConfigModule.forRoot()],
  controllers: [VideoUploadController, MediaPlayerController],
  providers: [
    ContentManagementService,
    MediaPlayerService,
    ContentRepository,
    VideoRepository,
    ExternalRatingClient,
    HttpClient,
  ],
})
export class AppModule {}
