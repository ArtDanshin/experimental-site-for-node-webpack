import { IsDateString, IsString } from 'class-validator';

export class ArticleDto {
  @IsString()
    title: string;

  @IsString()
    description: string;

  // @IsString()
  //   image: string;

  @IsDateString()
    publishedAt: Date;

  @IsString()
    slug: string;

  // @IsString()
  //   category: string;
  //
  // @IsString({ each: true })
  //   tags: string[];

  @IsString()
    body: string;
}
