/**
 * ArticleCard component types
 */

export interface ArticleCardProps {
  /**
   * Article title
   */
  title: string
  
  /**
   * Article excerpt/description
   */
  excerpt: string
  
  /**
   * Article category
   */
  category: string
  
  /**
   * Article image URL
   */
  image: string
  
  /**
   * Article link URL
   */
  href: string
  
  /**
   * Publication date
   */
  date: string
  
  /**
   * Article tags
   */
  tags?: string[]
  
  /**
   * Reading time
   */
  readingTime?: string
}

export interface ArticleCardEmits {
  (e: 'click'): void
}

