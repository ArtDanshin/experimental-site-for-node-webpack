import { Injectable } from '@nestjs/common';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';

import { ArticlesModel } from './articles.model';
import { ArticlesDto } from './dto/articles.dto';

@Injectable()
export class ArticlesService {
  constructor(@InjectModel(ArticlesModel) private readonly articlesModel: ModelType<ArticlesModel>) {}

  async create(dto: ArticlesDto): Promise<DocumentType<ArticlesModel> | void> {
    try {
      const article = await this.articlesModel.create(dto);

      return article;
    } catch (e) {
      return console.log('-- wow ---', Object.keys(e));
    }
  }

  async deleteById(id: string): Promise<DocumentType<ArticlesModel> | null> {
    return this.articlesModel.findByIdAndDelete(id).exec();
  }

  async updateById(id: string, dto: ArticlesDto): Promise<DocumentType<ArticlesModel> | null> {
    return this.articlesModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  async getById(id: string): Promise<DocumentType<ArticlesModel> | null> {
    return this.articlesModel.findById(id).exec();
  }

  async getAll(): Promise<DocumentType<ArticlesModel>[]> {
    return this.articlesModel.find().exec();
  }
}
