import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';

import { IdValidationPipe } from '@/pipes/id-validation.pipe';

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
  async getOne(@Param('id', IdValidationPipe) id: string) {
    const article = this.articlesService.getById(id);

    if (!article) {
      throw new HttpException(ARTICLE_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    return article;
  }

  @UsePipes(new ValidationPipe())
  @Post()
  async create(@Body() dto: ArticlesDto) {
    return this.articlesService.create(dto);
  }

  @UsePipes(new ValidationPipe())
  @Patch(':id')
  async update(@Param('id', IdValidationPipe) id: string, @Body() dto: ArticlesDto) {
    const article = this.articlesService.updateById(id, dto);

    if (!article) {
      throw new HttpException(ARTICLE_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    return article;
  }

  @Delete(':id')
  async delete(@Param('id', IdValidationPipe) id: string) {
    const deletedArticle = await this.articlesService.deleteById(id);

    if (!deletedArticle) {
      throw new HttpException(ARTICLE_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }
}
