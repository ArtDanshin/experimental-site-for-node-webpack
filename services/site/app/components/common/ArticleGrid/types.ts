import type { Article } from '~/types/article';

export interface ArticleGridProps {
  articles: Article[];
  limit?: number;
}
