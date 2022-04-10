import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';

import { ArticlesDto } from './dto/articles.dto';

@Controller('articles')
export class ArticlesController {
  @Get()
  static async getAll() {

  }

  @Get(':id')
  static async getOne(@Param('id') id: string) {

  }

  @Post()
  static async create(@Body() dto: Omit<ArticlesDto, '_id'>) {

  }

  @Patch()
  static async update(@Body() dto: ArticlesDto) {

  }

  @Delete(':id')
  static async delete(@Param('id') id: string) {

  }
}
