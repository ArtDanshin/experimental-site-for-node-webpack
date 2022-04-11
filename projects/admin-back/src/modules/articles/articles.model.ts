import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface ArticlesModel extends Base {}
export class ArticlesModel extends TimeStamps {
  @prop()
    title: string;

  @prop()
    description: string;

  @prop()
    image: string;

  @prop()
    publishAt: Date;

  @prop({ unique: true })
    slug: string;

  @prop()
    category: string;

  @prop({ type: () => [String]})
    tags: string[];

  @prop()
    body: string;
}
