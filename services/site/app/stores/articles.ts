import { defineStore } from 'pinia';

import type { Article, ArticleFilters } from '@/types/article';

export const useArticlesStore = defineStore('articles', () => {
  const articles = ref<Article[]>([]);
  const currentArticle = ref<Article | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const { getArticles, getArticle, getFeaturedArticles } = useArticles();

  const fetchArticles = async (filters?: ArticleFilters) => {
    loading.value = true;
    error.value = null;

    try {
      const result = await getArticles(filters);
      articles.value = result.articles;
    } catch (error_) {
      error.value = error_ instanceof Error ? error_.message : 'Failed to fetch articles';
    } finally {
      loading.value = false;
    }
  };

  const fetchArticle = async (id: string) => {
    loading.value = true;
    error.value = null;

    try {
      const article = await getArticle(id);
      currentArticle.value = article;
    } catch (error_) {
      error.value = error_ instanceof Error ? error_.message : 'Failed to fetch article';
    } finally {
      loading.value = false;
    }
  };

  const fetchFeaturedArticles = async (limit = 3) => {
    loading.value = true;
    error.value = null;

    try {
      const featured = await getFeaturedArticles(limit);
      articles.value = featured;
    } catch (error_) {
      error.value = error_ instanceof Error ? error_.message : 'Failed to fetch featured articles';
    } finally {
      loading.value = false;
    }
  };

  return {
    articles: readonly(articles),
    currentArticle: readonly(currentArticle),
    loading: readonly(loading),
    error: readonly(error),
    fetchArticles,
    fetchArticle,
    fetchFeaturedArticles,
  };
});
