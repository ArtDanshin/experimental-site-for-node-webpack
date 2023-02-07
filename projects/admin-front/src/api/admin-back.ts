import axios, { AxiosResponse } from 'axios';

import { components } from '@/specs/admin-api'; // eslint-disable-line import/extensions

type Schemas = components['schemas'];

export const AdminAPI = {
  createArticle(body: Schemas['ArticleDto']): Promise<AxiosResponse<Schemas['ArticleDto']>> {
    return axios.post('/api/articles', body);
  },

  getArticles(): Promise<AxiosResponse<[Schemas['ArticleDto']]>> {
    return axios.get('/api/articles');
  },

  getArticle(slug: string): Promise<AxiosResponse<Schemas['ArticleDto']>> {
    return axios.get(`/api/articles/${slug}`);
  },

  updateArticle(slug: string, body: Schemas['ArticleDto']): Promise<AxiosResponse<Schemas['ArticleDto']>> {
    return axios.put(`/api/articles/${slug}`, body);
  },

  deleteArticle(slug: string): Promise<AxiosResponse<Schemas['ArticleDto']>> {
    return axios.delete(`/api/articles/${slug}`);
  }
};
