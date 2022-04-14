import { IsDate, IsString } from 'class-validator';

export class ArticlesDto {
  @IsString()
    title: string;

  @IsString()
    description: string;

  @IsString()
    image: string;

  @IsDate()
    publishAt: Date;

  @IsString()
    slug: string;

  @IsString()
    category: string;

  @IsString({ each: true })
    tags: string[];

  @IsString()
    body: string;
}
