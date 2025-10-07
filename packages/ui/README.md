# @artdanshin/ui

Библиотека компонентов монорепозитория.

## Установка

```bash
npm install @artdanshin/ui
```

## Использование

### Импорт стилей

При инициализации проекта импортируем стили библиотеки компонентов

```typescript
import '@artdanshin/ui/styles'
```

### Импорт компонентов

```typescript

import { Button, Tag, ArticleCard } from '@artdanshin/ui'
```

## Пример использования

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

## Разработка

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка библиотеки
npm run build

# Запуск тестов
npm run test

# Запуск Storybook
npm run storybook
```

## Структура проекта

```
src/
├── components/          # Компоненты
│   ├── Button/
│   │   ├── Button.vue   # Vue компонент
│   │   ├── Button.css   # Стили компонента
│   │   ├── index.ts     # Экспорт с импортом стилей
│   │   └── types.ts     # TypeScript типы
│   └── ...
├── tokens/              # Дизайн-токены
└── index.ts            # Главный экспорт
```
