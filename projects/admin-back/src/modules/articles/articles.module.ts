import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';

import { Article, ArticleSchema } from './schemas/article.schema';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';

import { MongoValidationExeptionFilter } from '@/filters/mongoose-exceptions.filter';

@Module({
  controllers: [ArticlesController],
  imports: [
    MongooseModule.forFeature([{
      name: Article.name,
      schema: ArticleSchema
    }])
  ],
  providers: [
    ArticlesService,
    {
      provide: APP_FILTER,
      useClass: MongoValidationExeptionFilter,
    }
  ]
})
export class ArticlesModule {}
