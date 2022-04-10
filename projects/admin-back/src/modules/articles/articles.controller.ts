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
  async getAll() {

  }

  @HttpStatus(200)
  @Get(':id')
  async getOne(@Param('id') id: string) {

  }

  @Post()
  async create(@Body() dto: Omit<ArticlesDto, '_id'>) {

  }

  @Patch()
  async update(@Body() dto: ArticlesDto) {

  }

  @Delete(':id')
  async delete(@Param('id') id: string) {

  }
}
