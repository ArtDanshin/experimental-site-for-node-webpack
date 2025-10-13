# Персональный сайт ArtDanshin

## Описание проекта

Персональный сайт фронтенд разработчика увлекающегося играми и стримингом. На сайте предполагается размещать материалы касающиеся опыта разработки, портфолио проектов, статьи на техническую тематику и немного про музыку

## Структура сайта

Основные разделы(куда указывает навигация по сайту):
- Главная страница
- Обо мне - Общая информация обо мне
- Статьи - Лонгриды про всякое техническое и не только
- Проекты - Личные проекты по программированию и дизайну
- Музыка - Плейлисты и ссылки на них
- Контакты - Список соцсетей, в которых можно меня найти

Структура основного шаблона сайта:
- Логотип
- Навигация по сайту
- Тело сайта
- Подвал с ссылками на навигацию и соцсети

Список страниц, и их содержание:
Главная:
- Краткая информация из других разделов

Обо мне:
- Фото
- Краткий рассказ обо мне
- Список технологий, в которых я мастер

Статьи:
- Разделы статей, например: Frontend, Backend, Стриминг, Железо и прочее. Список может дополняться и сокращаться
- Список из статей, у которых есть:
 - Картинка
 - Краткое описание
 - Дата публикации
 - Раздел
 - Тэги
- Пагинация

Раздел/Тэг:
- Список статей, аналогичный странице статьи
- Пагинация

Статья: 
- Заголовок
- Картинка
- Дата публикации
- Раздел
- Тэги
- Полное тело статьи
- Комментарии

Проекты:
- Список проектов, содержащий
 - Картинку
 - Название проекта
 - Краткое описание

Проект:
- Картинка
- Полное описание проекта
- Ссылки на него

Музыка:
- Список плейлистов, содержащий
 - Картинку плейлиста
 - Заголовок
 - Количество треков

Плейлист:
- Картинка плейлиста
- Заголовок
- Описание
- Список треков состоящий из:
 - Номер позиции трека
 - Обложка альбома трека
 - Исполнитель трека
 - Название трека
 - Длительность
 - Иконки сервисов, где доступен трек

Контакты:
- Список баннеров-ссылок на внешние ресурсы с описанием

## Используемые технологии

- Frontend: **VueJS 3.5**
- BFF: **Nuxt **4.1.2**
- Styles: **SCSS**
- UI Library: **@artdanshin/ui**(см. монорепу `packages/ui`)

## Архитектура проекта

```
site/
├── src                                 # Основные исходные файлы проекта
│   ├── assets/
│   │   ├── styles/                     # Общие стили
│   │   └── images/                     # Общие картинки
│   ├── components/                     # Элементы/компоненты интерфейса поделенные по доменам
│   │   ├── layout/                     # Описание Layout'а страниц
│   │   │   ├── AppHeader
│   │   │   │   └── ...
│   │   │   ├── AppFooter
│   │   │   │   └── ...
│   │   │   └── AppNavigation
│   │   │   │   └── ...
│   │   ├── articles/                   # Блоки страницы 'Статьи'
│   │   │   ├── ArticleCard
│   │   │   │   └── ...
│   │   │   ├── ArticleGrid
│   │   │   │   └── ...
│   │   │   ├── ArticleFilters
│   │   │   │   └── ...
│   │   │   ├── ArticleSearch
│   │   │   │   └── ...
│   │   │   └── ArticleMeta
│   │   │   │   └── ...
│   │   ├── projects/                   # Блоки страница 'Проекты'
│   │   │   ├── ProjectCard
│   │   │   │   └── ...
│   │   │   ├── ProjectGrid
│   │   │   │   └── ...
│   │   │   ├── ProjectFilters
│   │   │   │   └── ...
│   │   │   └── ProjectTech
│   │   │   │   └── ...
│   │   ├── music/                      # Блоки страница 'Музыка'
│   │   │   ├── PlaylistCard
│   │   │   │   └── ...
│   │   │   ├── TrackItem
│   │   │   │   └── ...
│   │   │   ├── MusicPlayer
│   │   │   │   └── ...
│   │   │   └── PlaylistGrid
│   │   │   │   └── ...
│   │   └── common/                     # Общие логические блоки страниц
│   │       ├── HeroSection
│   │       │   └── ...
│   │       ├── StatsSectione
│   │       │   └── ...
│   │       ├── ContactForm
│   │       │   └── ...
│   │       └── SocialLinks
│   │           └── ...
│   ├── composables/
│   │   ├── useArticles.ts
│   │   ├── useProjects.ts
│   │   ├── useMusic.ts
│   │   ├── useSearch.ts
│   │   ├── useApi.ts
│   │   ├── usePagination.ts
│   │   └── useFilters.ts
│   ├── layouts/
│   │   ├── default.vue
│   │   ├── article.vue
│   │   └── error.vue
│   ├── middleware/
│   │   ├── seo.ts
│   │   └── analytics.ts
│   ├── pages/                          # Роутинг и композиция страниц
│   │   ├── index.vue
│   │   ├── about.vue
│   │   ├── articles/
│   │   │   ├── index.vue
│   │   │   ├── [slug].vue
│   │   │   └── category/
│   │   │       └── [category].vue
│   │   ├── projects/
│   │   │   ├── index.vue
│   │   │   └── [slug].vue
│   │   ├── music/
│   │   │   ├── index.vue
│   │   │   └── [slug].vue
│   │   └── contacts.vue
│   ├── plugins/
│   │   ├── fontawesome.client.ts
│   │   ├── analytics.client.ts
│   │   └── seo.client.ts
│   ├── server/                         # Промежуточный прокси между фронтендом и бэкендом
│   │   ├── api/
│   │   │   ├── articles/
│   │   │   │   ├── index.get.ts
│   │   │   │   ├── [id].get.ts
│   │   │   │   └── search.get.ts
│   │   │   ├── projects/
│   │   │   │   ├── index.get.ts
│   │   │   │   └── [id].get.ts
│   │   │   ├── music/
│   │   │   │   ├── index.get.ts
│   │   │   │   └── [id].get.ts
│   │   │   └── search/
│   │   │       └── index.get.ts
│   │   └── middleware/
│   │       ├── cors.ts
│   │       └── rate-limit.ts
│   ├── stores/
│   │   ├── articles.ts
│   │   ├── projects.ts
│   │   ├── music.ts
│   │   ├── ui.ts
│   │   └── search.ts
│   ├── types/
│   │   ├── article.ts
│   │   ├── project.ts
│   │   ├── music.ts
│   │   ├── api.ts
│   │   └── common.ts
│   ├── utils/
│   │   ├── api.ts
│   │   ├── seo.ts
│   │   ├── date.ts
│   │   └── validation.ts
└── nuxt.config.ts
```

## Структура компонента

Component/
├── Component.vue     # Vue компонент
├── Component.css     # Стили компонента
├── Component.ts      # Скрипты компонента
├── Component.test.ts # Тесты
├── index.ts          # Общий экспорт
└── types.ts          # Типы относящие к компоненту

## 🔧 **Технические решения**

### **State Management:**
- **Pinia** для глобального состояния
- **Composables** для локального состояния компонентов
- **Server State** через Nuxt Server API

### **API Integration:**
```typescript
// composables/useApi.ts
export const useApi = () => {
  const { $fetch } = useNuxtApp()
  
  return {
    articles: {
      getAll: () => $fetch('/api/articles'),
      getById: (id: string) => $fetch(`/api/articles/${id}`),
      search: (query: string) => $fetch('/api/articles/search', { query: { q: query } })
    },
    projects: {
      getAll: () => $fetch('/api/projects'),
      getById: (id: string) => $fetch(`/api/projects/${id}`)
    },
    music: {
      getPlaylists: () => $fetch('/api/music'),
      getPlaylist: (id: string) => $fetch(`/api/music/${id}`)
    }
  }
}
```

### **SEO и Meta:**
```typescript
// composables/useSeo.ts
export const useSeo = (meta: any) => {
  useHead({
    title: meta.title,
    meta: [
      { name: 'description', content: meta.description },
      { property: 'og:title', content: meta.title },
      { property: 'og:description', content: meta.description },
      { property: 'og:image', content: meta.image }
    ]
  })
}
```

### **Роутинг:**
```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    routeRules: {
      '/': { prerender: true },
      '/articles': { isr: 60 },
      '/articles/**': { isr: 3600 },
      '/projects': { isr: 60 },
      '/projects/**': { isr: 3600 }
    }
  }
})
```
