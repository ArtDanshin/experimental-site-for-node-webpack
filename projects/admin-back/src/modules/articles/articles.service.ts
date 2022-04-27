import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

// eslint-disable-next-line import/extensions
import { SchemaDuplicateRecordException } from '@/filters/exceptions/schema-duplicate-record';

import { ArticleDto } from './dto/article.dto';
import { Article, ArticleDocument } from './schemas/article.schema';

@Injectable()
export class ArticlesService {
  constructor(@InjectModel(Article.name) private readonly articleModel: Model<ArticleDocument>) {}

  async create(dto: ArticleDto): Promise<Article> {
    // eslint-disable-next-line new-cap
    const article = new this.articleModel(dto);
    try {
      return await article.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new SchemaDuplicateRecordException(error);
      }
      throw error;
    };
  }

  async deleteById(id: string): Promise<Article | null> {
    return this.articleModel.findByIdAndDelete(id).exec();
  }

  async updateById(id: string, dto: ArticleDto): Promise<Article | null> {
    return this.articleModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  async getById(id: string): Promise<Article | null> {
    return this.articleModel.findById(id).exec();
  }

  async getAll(): Promise<Article[]> {
    return this.articleModel.find().exec();
  }
}
