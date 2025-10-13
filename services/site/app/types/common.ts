export interface User {
  id: string
  name: string
  title: string
  avatar: string
  bio: string
  location: string
  website?: string
  social: {
    github?: string
    twitter?: string
    linkedin?: string
    telegram?: string
    vk?: string
    twitch?: string
    youtube?: string
  }
}

export interface NavigationItem {
  label: string
  href: string
  icon: string
  active?: boolean
}

export type SocialLinkVariant = 'gh' | 'th' | 'yb' | 'tg' | 'vk';

export interface SocialLink {
  type: SocialLinkVariant
  href: string
  color: string
}

export interface SEO {
  title: string
  description: string
  image: string
  url: string
  type: 'website' | 'article' | 'profile'
  publishedAt?: string
  updatedAt?: string
  author?: string
  tags?: string[]
}
