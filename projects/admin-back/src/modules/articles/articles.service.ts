import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

import { ArticlesDto } from './dto/articles.dto';
import { Article, ArticleDocument } from './schemas/article.schema';

@Injectable()
export class ArticlesService {
  constructor(@InjectModel(Article.name) private readonly articleModel: Model<ArticleDocument>) {}

  async create(dto: ArticlesDto): Promise<Article> {
    // eslint-disable-next-line new-cap
    const article = new this.articleModel(dto);
    return article.save();
  }

  async deleteById(id: string): Promise<Article | null> {
    return this.articleModel.findByIdAndDelete(id).exec();
  }

  async updateById(id: string, dto: ArticlesDto): Promise<Article | null> {
    return this.articleModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  async getById(id: string): Promise<Article | null> {
    return this.articleModel.findById(id).exec();
  }

  async getAll(): Promise<Article[]> {
    return this.articleModel.find().exec();
  }
}
