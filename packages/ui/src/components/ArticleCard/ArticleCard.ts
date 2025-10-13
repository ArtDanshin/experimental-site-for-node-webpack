import { computed } from 'vue';

import type { ArticleCardProps, ArticleCardEmits } from './types';

export function setupArticleCard(
  props: ArticleCardProps,
  emit: ArticleCardEmits,
) {
  const formatedDate = computed(() => {
    const date = new Date(props.date);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return new Intl.DateTimeFormat('ru-RU', options).format(date);
  });

  // Handle click event
  const handleClick = () => {
    emit('click');
  };

  return {
    formatedDate,
    handleClick,
  };
}
