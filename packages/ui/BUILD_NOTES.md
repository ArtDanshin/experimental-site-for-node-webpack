# Заметки о сборке библиотеки

## Решение проблемы с автоматическим подключением стилей

### Проблема
При подключении библиотеки компоненты отображались без стилей, так как CSS не импортировался автоматически при использовании `preserveModules: true`.

### Решение
Реализован post-build скрипт `scripts/inject-css-imports.js`, который автоматически добавляет импорты CSS в файлы компонентов после сборки:

- **ES Modules**: добавляется `import './Component.css';`
- **CommonJS**: добавляется `require('./Component.css');`

### Как это работает

1. **Сборка**: Vite собирает компоненты с `preserveModules: true`, создавая отдельные CSS файлы для каждого компонента
2. **Post-build**: Скрипт `inject-css-imports.js` автоматически добавляет импорты CSS в начало каждого файла компонента `index.js/index.cjs`
3. **Результат**: При импорте компонента автоматически подключаются его стили

### Структура сборки

```
dist/
├── es/                                    # ES Modules
│   ├── index.js                          # Главный файл (все компоненты)
│   ├── components/
│   │   ├── Button/
│   │   │   ├── index.js                  # import './Button.css'
│   │   │   ├── Button.css                # Стили кнопки
│   │   │   ├── Button.vue.js
│   │   │   └── Button.js
│   │   ├── Tag/
│   │   │   ├── index.js                  # import './Tag.css'
│   │   │   ├── Tag.css                   # Стили тега
│   │   │   └── ...
│   │   └── ArticleCard/
│   │       ├── index.js                  # import './ArticleCard.css'
│   │       ├── ArticleCard.css           # Стили карточки
│   │       └── ...
│   └── tokens/
│       ├── index.js
│       └── tokens.css                    # CSS переменные
├── cjs/                                  # CommonJS (аналогично)
│   └── components/
│       └── Button/
│           └── index.cjs                 # require('./Button.css')
└── *.d.ts                                # TypeScript определения
```

### Tree Shaking

Благодаря `preserveModules: true` и правильной настройке `sideEffects` в `package.json`:

```json
{
  "sideEffects": [
    "**/*.css",
    "dist/es/components/*/index.js",
    "dist/cjs/components/*/index.cjs",
    "dist/es/tokens/index.js",
    "dist/cjs/tokens/index.cjs"
  ]
}
```

**Tree Shaking работает корректно:**
- При импорте только Button: `import { Button } from '@myproj/ui'` → в бандл попадёт только Button + его стили
- При импорте конкретного компонента: `import { Button } from '@myproj/ui/components/Button'` → в бандл попадёт только Button + его стили

### Команда сборки

```bash
npm run build
```

Выполняет:
1. `vue-tsc -b` - проверка TypeScript
2. `vite build` - сборка библиотеки
3. `node scripts/inject-css-imports.js` - инъекция импортов CSS

## Важные файлы конфигурации

### vite.config.ts
- `preserveModules: true` - сохранение структуры модулей для Tree Shaking
- `cssCodeSplit: true` - создание отдельных CSS файлов для каждого компонента
- Multiple entry points - для правильных TypeScript определений

### package.json
- `exports` - правильные экспорты для каждого компонента
- `sideEffects` - указываем файлы с побочными эффектами (CSS импорты)
- `files` - включаем только `dist` в npm пакет

### scripts/inject-css-imports.js
- Автоматически добавляет импорты CSS после сборки
- Поддерживает ES Modules (`import`) и CommonJS (`require`)
- Идемпотентен - можно запускать многократно

