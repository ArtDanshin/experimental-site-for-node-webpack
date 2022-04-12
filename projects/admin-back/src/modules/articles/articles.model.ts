import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface ArticlesModel extends Base {}
export class ArticlesModel extends TimeStamps {
  @prop({ required: true })
    title: string;

  @prop({ required: true })
    description: string;

  @prop()
    image: string;

  @prop({ required: true })
    publishAt: Date;

  @prop({ required: true, unique: true })
    slug: string;

  @prop()
    category: string;

  @prop({ type: () => [String]})
    tags: string[];

  @prop()
    body: string;
}
