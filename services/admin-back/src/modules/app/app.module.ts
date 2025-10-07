import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { FilesModule } from '@/modules/files/files.module';
import { getMongoConfig } from '@/configs/mongo.config';
import { ArticlesModule } from '@/modules/articles/articles.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig
    }),
    ArticlesModule,
    FilesModule
  ]
})
export class AppModule {}
