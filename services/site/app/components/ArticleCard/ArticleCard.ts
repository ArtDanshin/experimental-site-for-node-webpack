import type { ArticleCardProps } from './types'

export const useArticleCard = (props: ArticleCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return {
    formatDate
  }
}
