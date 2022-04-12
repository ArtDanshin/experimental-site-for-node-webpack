import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';

import { ArticlesController } from './articles.controller';
import { ArticlesModel } from './articles.model';
import { ArticlesService } from './articles.service';

@Module({
  controllers: [ArticlesController],
  imports: [
    TypegooseModule.forFeature([{
      typegooseClass: ArticlesModel,
      schemaOptions: {
        collection: 'Articles'
      }
    }])
  ],
  providers: [ArticlesService]
})
export class ArticlesModule {}
