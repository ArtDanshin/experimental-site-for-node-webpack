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
    }
  }

  async deleteBySlug(slug: string): Promise<Article | null> {
    return this.articleModel.findOneAndDelete({ slug }).exec();
  }

  async updateBySlug(slug: string, dto: ArticleDto): Promise<Article | null> {
    return this.articleModel.findOneAndUpdate({ slug }, dto, { new: true }).exec();
  }

  async getBySlug(slug: string): Promise<Article | null> {
    return this.articleModel.findOne({ slug }).exec();
  }

  async getAll(): Promise<Article[]> {
    return this.articleModel.find().exec();
  }
}
