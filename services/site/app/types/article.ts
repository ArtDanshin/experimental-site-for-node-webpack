export interface Article {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  author: {
    name: string;
    avatar: string;
  };
  readingTime: number;
  views: number;
}

export interface ArticleMeta {
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  category: string;
  tags: string[];
  readingTime: number;
}

export interface ArticleFilters {
  category?: string;
  tags?: string[];
  search?: string;
  sortBy?: 'publishedAt' | 'views' | 'readingTime';
  sortOrder?: 'asc' | 'desc';
}

export interface ArticleSearchResult {
  articles: Article[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}
