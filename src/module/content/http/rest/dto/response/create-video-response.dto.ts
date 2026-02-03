import { Expose } from 'class-transformer';
import { IsDate, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateVideoResponseDto {
  @IsUUID(4)
  @Expose()
  id: string;

  @IsString()
  @Expose()
  title: string;

  @IsString()
  @Expose()
  description: string;

  @IsString()
  @Expose()
  url: string;

  @IsDate()
  @Expose()
  createdAt: Date;

  @IsDate()
  @Expose()
  updatedAt: Date;

  @IsString()
  @Expose()
  thumbnailUrl: string;

  @IsNumber()
  @Expose()
  sizeInKb: number;

  @IsNumber()
  @Expose()
  duration: number;
}
