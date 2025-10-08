# @artdanshin/ui

Библиотека компонентов монорепозитория

## Используемые технологии и библиотеки

- **Vue.js 3.5.3**
- **TypeScript 5.8.3**
- **Storybook 9.1.9** - документирование и разработка компонентов в изоляции
- **Vite 7.1.4** - быстрая сборка и dev-сервер
- **Vitest 3.2.4** - юнит-тесты
- **PostCSS/SCSS** - препроцессинг стилей

## Использование

### Установка

```bash
npm install @artdanshin/ui
```

### Импорт стилей

При инициализации проекта импортируем стили библиотеки компонентов

```typescript
import '@artdanshin/ui/styles'
```

### Импорт компонентов

```typescript
import { Button, Tag, ArticleCard } from '@artdanshin/ui'
```

### Пример использования

```vue
<template>
  <div>
    <Button variant="primary" size="lg">
      Основная кнопка
    </Button>
    
    <Tag variant="success" closable>
      Успех
    </Tag>
    
    <ArticleCard
      :title="article.title"
      :excerpt="article.excerpt"
      :date="article.date"
    />
  </div>
</template>

<script setup lang="ts">
  import { Button, Tag, ArticleCard } from '@myproj/ui'

  const article = {
    title: 'Заголовок статьи',
    excerpt: 'Краткое описание...',
    date: '2024-01-01'
  }
</script>
```

## Команды для разработки

- `npm install` - Установка зависимостей
- `npm run dev` - Запуск в режиме разработки
- `npm run build` - Сборка библиотеки
- `npm run test` - Запуск тестов
- `npm run lint` - Запуск линтеров с возможным исправлением ошибок
- `npm run storybook` - Запуск Storybook

## Структура проекта

```
src/
├── components/          # Компоненты
│   ├── Button/
│   │   ├── Button.vue        # Vue компонент
│   │   ├── Button.css        # Стили компонента
│   │   ├── Button.ts         # Скрипты компонента
│   │   ├── Button.stories.ts # История для отображения в Storybook
│   │   ├── Button.test.ts    # Тесты
│   │   ├── index.ts          # Общий экспорт
│   │   └── types.ts          # Типы относящие к компоненту
│   └── ...
├── styles/              # Общие стили для всех компонентов
│   ├── tokens/          # CSS переменные 
│   │   └── ...
│   ├── fonts.css        # Подключение шрифтов   
│   └── ...
└── index.ts             # Главный экспорт
```
