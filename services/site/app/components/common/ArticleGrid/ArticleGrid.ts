import { computed } from 'vue'
import type { ArticleGridProps } from './types'

export const setupArticleGrid = (props: ArticleGridProps) => {
  const displayedArticles = computed(() => {
    if (props.limit && props.limit > 0) {
      return props.articles.slice(0, props.limit)
    }
    return props.articles
  })

  return {
    displayedArticles
  }
}
