import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

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
  providers: [ArticlesService]
})
export class ArticlesModule {}
