import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Article {
  @ApiProperty()
  @Prop({ required: true })
    title: string;

  @ApiProperty()
  @Prop({ required: true })
    description: string;

  // @Prop()
  //   image: string;

  @ApiProperty()
  @Prop({ required: true })
    publishedAt: Date;

  @ApiProperty()
  @Prop({ required: true, unique: true })
    slug: string;

  // @Prop()
  //   category: string;
  //
  // @Prop({ type: [String] })
  //   tags: string[];

  @ApiProperty()
  @Prop()
    body: string;
}

export type ArticleDocument = Article & Document;
export const ArticleSchema = SchemaFactory.createForClass(Article);
