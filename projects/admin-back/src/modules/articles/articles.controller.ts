import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post
} from '@nestjs/common';

import { ARTICLE_NOT_FOUND } from './articles.constants';
import { ArticlesService } from './articles.service';
import { ArticlesDto } from './dto/articles.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  async getAll() {
    return this.articlesService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    const article = this.articlesService.getById(id);

    if (!article) {
      throw new HttpException(ARTICLE_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    return article;
  }

  @Post()
  async create(@Body() dto: ArticlesDto) {
    return this.articlesService.create(dto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: ArticlesDto) {
    const article = this.articlesService.updateById(id, dto);

    if (!article) {
      throw new HttpException(ARTICLE_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    return article;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedArticle = await this.articlesService.deleteById(id);

    if (!deletedArticle) {
      throw new HttpException(ARTICLE_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }
}
