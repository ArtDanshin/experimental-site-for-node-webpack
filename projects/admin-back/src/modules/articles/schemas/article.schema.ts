import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Article {
  @Prop({ required: true })
    title: string;

  @Prop({ required: true })
    description: string;

  // @Prop()
  //   image: string;

  @Prop({ required: true })
    publishedAt: Date;

  @Prop({ required: true, unique: true })
    slug: string;

  // @Prop()
  //   category: string;
  //
  // @Prop({ type: [String] })
  //   tags: string[];

  @Prop()
    body: string;
}

export type ArticleDocument = Article & Document;
export const ArticleSchema = SchemaFactory.createForClass(Article);
