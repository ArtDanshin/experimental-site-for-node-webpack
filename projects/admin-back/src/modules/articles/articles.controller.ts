import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post
} from '@nestjs/common';

import { ArticlesDto } from './dto/articles.dto';

@Controller('article')
export class ArticlesController {
  @HttpStatus(200)
  @Get()
  static async getAll() {

  }

  @HttpStatus(200)
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
