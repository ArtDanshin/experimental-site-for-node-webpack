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

export interface Stats {
  projects: number
  articles: number
  streams: number
  playlists: number
}

export interface NavigationItem {
  label: string
  href: string
  icon: string
  active?: boolean
}

export interface SocialLink {
  name: string
  href: string
  icon: string
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
