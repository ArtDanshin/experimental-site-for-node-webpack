import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';

import { MongoValidationExeptionFilter } from '@/filters/mongoose-exceptions.filter';
import { SchemaDuplicateRecordExceptionFilter } from '@/filters/schema-duplicate-record-exception.filter';

import { Article, ArticleSchema } from './schemas/article.schema';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';

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
    },
    {
      provide: APP_FILTER,
      useClass: SchemaDuplicateRecordExceptionFilter,
    }
  ]
})
export class ArticlesModule {}
