import type { Article, ArticleFilters, ArticleSearchResult } from '~/types/article';

export const useArticles = () => {
  const { articles } = useApi();

  const getArticles = async (filters?: ArticleFilters) => {
    try {
      const response = await articles.getAll(filters);
      return response.data as ArticleSearchResult;
    } catch (error) {
      console.error('Error fetching articles:', error);
      throw error;
    }
  };

  const getArticle = async (id: string) => {
    try {
      const response = await articles.getById(id);
      return response.data as Article;
    } catch (error) {
      console.error('Error fetching article:', error);
      throw error;
    }
  };

  const getFeaturedArticles = async (limit = 3) => {
    try {
      const response = await articles.getFeatured(limit);
      return response.data as Article[];
    } catch (error) {
      console.error('Error fetching featured articles:', error);
      throw error;
    }
  };

  const searchArticles = async (query: string, filters?: ArticleFilters) => {
    try {
      const response = await articles.search({ search: query, ...filters });
      return response.data as ArticleSearchResult;
    } catch (error) {
      console.error('Error searching articles:', error);
      throw error;
    }
  };

  return {
    getArticles,
    getArticle,
    getFeaturedArticles,
    searchArticles,
  };
};
