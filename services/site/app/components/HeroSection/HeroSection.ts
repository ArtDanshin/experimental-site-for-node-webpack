import type { HeroSectionProps } from './types'

export const useHeroSection = (props: HeroSectionProps) => {
  const defaultProps = {
    title: 'Привет! Я ArtDanshin',
    subtitle: 'Frontend Developer',
    description: 'Создаю современные веб-приложения, делюсь опытом в статьях и стримлю разработку. Изучаю новые технологии и помогаю другим разработчикам.',
    primaryButtonText: 'Мои проекты',
    primaryButtonHref: '/projects',
    secondaryButtonText: 'Статьи',
    secondaryButtonHref: '/articles'
  }

  const mergedProps = { ...defaultProps, ...props }

  return {
    mergedProps
  }
}
