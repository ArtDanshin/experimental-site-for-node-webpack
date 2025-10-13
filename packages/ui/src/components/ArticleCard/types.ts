/**
 * ArticleCard component types
 */

export interface ArticleCardProps {
  /**
   * Article title
   */
  title: string;

  /**
   * Article excerpt/description
   */
  description: string;

  /**
   * Article category
   */
  category: string;

  /**
   * Article image URL
   */
  image: string;

  /**
   * Article link URL
   */
  href: string;

  /**
   * Publication date in ISO format
   */
  date: string;

  /**
   * Article tags
   */
  tags?: string[];

  /**
   * Reading time in minute
   */
  readingTime?: number;
}

export type ArticleCardEmits = (e: 'click') => void;
