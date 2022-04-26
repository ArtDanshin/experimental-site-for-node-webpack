import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import {
  ApiResponse,
  ApiTags
} from '@nestjs/swagger';

import { IdValidationPipe } from '@/pipes/id-validation.pipe';

import { ARTICLE_NOT_FOUND } from './articles.constants';
import { ArticlesService } from './articles.service';
import { ArticleDto } from './dto/article.dto';

@ApiTags('articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  @ApiResponse({ status: 200, type: [ArticleDto] })
  async getAll() {
    return this.articlesService.getAll();
  }

  @Get('by-id/:id')
  @ApiResponse({ status: 200, type: [ArticleDto] })
  @ApiResponse({ status: 404 })
  async getOne(@Param('id', IdValidationPipe) id: string) {
    const article = this.articlesService.getById(id);

    if (!article) {
      throw new HttpException(ARTICLE_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    return article;
  }

  @UsePipes(new ValidationPipe())
  @Post()
  @ApiResponse({ status: 201, type: ArticleDto })
  async create(@Body() dto: ArticleDto) {
    return this.articlesService.create(dto);
  }

  @UsePipes(new ValidationPipe())
  @Put('by-id/:id')
  @ApiResponse({ status: 200, type: ArticleDto })
  @ApiResponse({ status: 404 })
  async update(@Param('id', IdValidationPipe) id: string, @Body() dto: ArticleDto) {
    const article = this.articlesService.updateById(id, dto);

    if (!article) {
      throw new HttpException(ARTICLE_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    return article;
  }

  @Delete('by-id/:id')
  @ApiResponse({ status: 204 })
  @ApiResponse({ status: 404 })
  async delete(@Param('id', IdValidationPipe) id: string) {
    const deletedArticle = await this.articlesService.deleteById(id);

    if (!deletedArticle) {
      throw new HttpException(ARTICLE_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }
}
