import {
  Controller, HttpCode, Post, UploadedFile, UseInterceptors
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { FilesService } from './files.service';
import { FileElementResponse } from './dto/files-element.response';

@Controller('files')
export class FilesController {
  constructor(
    private readonly filesService: FilesService
  ) {}

  @Post('upload')
  @HttpCode(200)
  @UseInterceptors(FileInterceptor('files'))
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<FileElementResponse[]> {
    return this.filesService.saveFiles([file]);
  }
}
