import { Injectable } from '@nestjs/common';
import { format } from 'date-fns';
import { path } from 'app-root-path';
import { ensureDir, writeFile } from 'fs-extra';

import { FileElementResponse } from './dto/files-element.response';

@Injectable()
export class FilesService {
  // eslint-disable-next-line class-methods-use-this
  async saveFiles(files: Express.Multer.File[]): Promise<FileElementResponse[]> {
    const dateFolder = format(new Date(), 'yyyy-MM-dd');
    const uploadFolder = `${path}/public/uploads/${dateFolder}`;

    await ensureDir(uploadFolder);

    const writingProcesses: Promise<void>[] = [];
    const res: FileElementResponse[] = [];

    files.forEach((file) => {
      writingProcesses.push(writeFile(`${uploadFolder}/${file.originalname}`, file.buffer));
      res.push({ url: `${dateFolder}/${file.originalname}`, name: file.originalname });
    });

    await Promise.all(writingProcesses);

    return res;
  }
}
