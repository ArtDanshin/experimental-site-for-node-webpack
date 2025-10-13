import type { SEO } from '~/types/common'

export const useSeo = (meta: SEO) => {
  useHead({
    title: meta.title,
    meta: [
      { name: 'description', content: meta.description },
      { property: 'og:title', content: meta.title },
      { property: 'og:description', content: meta.description },
      { property: 'og:image', content: meta.image },
      { property: 'og:url', content: meta.url },
      { property: 'og:type', content: meta.type },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: meta.title },
      { name: 'twitter:description', content: meta.description },
      { name: 'twitter:image', content: meta.image }
    ],
    link: [
      { rel: 'canonical', href: meta.url }
    ]
  })
  
  if (meta.publishedAt) {
    useHead({
      meta: [
        { property: 'article:published_time', content: meta.publishedAt }
      ]
    })
  }
  
  if (meta.updatedAt) {
    useHead({
      meta: [
        { property: 'article:modified_time', content: meta.updatedAt }
      ]
    })
  }
  
  if (meta.author) {
    useHead({
      meta: [
        { property: 'article:author', content: meta.author }
      ]
    })
  }
  
  if (meta.tags && meta.tags.length > 0) {
    useHead({
      meta: [
        { property: 'article:tag', content: meta.tags.join(', ') }
      ]
    })
  }
}
