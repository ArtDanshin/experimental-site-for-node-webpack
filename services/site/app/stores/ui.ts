import { defineStore } from 'pinia'
import type { NavigationItem, SocialLink } from '~/types/common'

export const useUIStore = defineStore('ui', () => {
  const isMobileMenuOpen = ref(false)
  const isDarkMode = ref(false)
  const isLoading = ref(false)
  
  const navigationItems: NavigationItem[] = [
    {
      label: 'Главная',
      href: '/',
      icon: 'fas fa-home'
    },
    {
      label: 'Обо мне',
      href: '/about',
      icon: 'fas fa-user'
    },
    {
      label: 'Статьи',
      href: '/articles',
      icon: 'fas fa-blog'
    },
    {
      label: 'Проекты',
      href: '/projects',
      icon: 'fas fa-code'
    },
    {
      label: 'Музыка',
      href: '/music',
      icon: 'fas fa-music'
    },
    {
      label: 'Контакты',
      href: '/contacts',
      icon: 'fas fa-envelope'
    }
  ]
  
  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      href: 'https://github.com/artdanshin',
      icon: 'fab fa-github',
      color: '#333'
    },
    {
      name: 'Twitch',
      href: 'https://twitch.tv/artdanshin',
      icon: 'fab fa-twitch',
      color: '#9146ff'
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@artdanshin',
      icon: 'fab fa-youtube',
      color: '#ff0000'
    },
    {
      name: 'Telegram',
      href: 'https://t.me/artdanshin',
      icon: 'fab fa-telegram',
      color: '#0088cc'
    },
    {
      name: 'VK',
      href: 'https://vk.com/artdanshin',
      icon: 'fab fa-vk',
      color: '#4c75a3'
    }
  ]
  
  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }
  
  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
  }
  
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    // Сохраняем в localStorage
    if (process.client) {
      localStorage.setItem('darkMode', isDarkMode.value.toString())
    }
  }
  
  const setLoading = (loading: boolean) => {
    isLoading.value = loading
  }
  
  // Инициализация темы из localStorage
  if (process.client) {
    const savedTheme = localStorage.getItem('darkMode')
    if (savedTheme !== null) {
      isDarkMode.value = savedTheme === 'true'
    }
  }
  
  return {
    isMobileMenuOpen: readonly(isMobileMenuOpen),
    isDarkMode: readonly(isDarkMode),
    isLoading: readonly(isLoading),
    navigationItems,
    socialLinks,
    toggleMobileMenu,
    closeMobileMenu,
    toggleDarkMode,
    setLoading
  }
})
