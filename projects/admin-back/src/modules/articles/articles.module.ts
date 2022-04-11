import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';

import { ArticlesController } from './articles.controller';
import { ArticlesModel } from './articles.model';

@Module({
  controllers: [ArticlesController],
  imports: [
    TypegooseModule.forFeature([{
      typegooseClass: ArticlesModel,
      schemaOptions: {
        collection: 'Articles'
      }
    }])
  ]
})
export class ArticlesModule {}
