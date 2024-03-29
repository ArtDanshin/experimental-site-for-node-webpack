module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    'unicorn',
    'jsdoc'
  ],
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:unicorn/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: '.'
  },
  ignorePatterns: [
    '**/dist/*.*'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    node: true
  },
  rules: {
    /* Отключение Airbnb обычных стилей */
    'comma-dangle': [0], // Отключает - В конце объекта нужно всегда ставить ,
    'no-use-before-define': [0], // (?) Отключает - Определение функции/переменной всегда должно быть перед использованием
    'wrap-iife': [0], // Отключает - Странное правило связанное с самовызывающимися функциями
    'import/prefer-default-export': [0], // Отключает - В файле обязательно должен быть экспортируемый по умолчанию модуль
    'import/no-extraneous-dependencies': [0], // Отключает - Проверка на то, что зависимости указаны в секции dependencies файла package.json
    'max-classes-per-file': [0], // Отключает - Проверка на кол-во классов в файле
    'no-plusplus': [0], // Отключает - Нельзя делать унарные сложения
    'prefer-template': [0], // Отключает - Всегда использовать шаблонные строки
    'func-names': [0], // Отключает - Предупреждение, что функции должны всегда иметь название

    /* Отключение Airbnb стилей касающихся реакта */
    'react/no-danger': [0], // Отключает - Предуждение, что нельзя использовать dangerouslySetInnerHTML
    'react/state-in-constructor': [0], // (?) Отключает - State должен объявляться только в конструкторе. В Airbnb конфиге есть планы по переходу на опцию 'never'. После этого обновления нужно будет включить
    'react/destructuring-assignment': [0], // Отключает - Нужно всегда деструктурировать state, props, сontext перед использованием
    'react/require-default-props': [0], // Отключает - Нужно указывать значение по умолчанию у пропсов
    'react/jsx-filename-extension': [0], // (?) Отключает - Файлы с JSX разметкой должны иметь расширение *.jsx
    'react/jsx-props-no-spreading': [0], // Отключает - Нельзя прокидывать props через spread оператор
    'react/jsx-first-prop-new-line': [0], // Отключает - Если props много, то первый сразу переносится на новую строку

    /* Изменение/добавление обычных стилей */
    'no-unused-expressions': [2, { // Контроллирует выражания, написынные через &&, || и ?
      allowShortCircuit: true,
      allowTernary: true
    }],
    'max-len': [2, { // Настройка ограничения длинны строк кода
      code: 120,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }],
    'object-curly-newline': [2, { // Настройка записи мультистрочных объектов
      multiline: true,
      minProperties: 5,
      consistent: true
    }],
    'sort-imports': [2, {
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      allowSeparatedGroups: true
    }], // Сортировка импортированных модулей

    /* Изменение/добавление стилей Import плагина */
    'import/order': [2, {
      groups: [['builtin', 'external'], 'type', 'internal', 'parent', 'unknown', ['sibling', 'index']],
      'newlines-between': 'always',
      warnOnUnassignedImports: true
    }], // Порядок импортов модулей и объединение их в группы

    /* Изменение/добавление стилей касающихся реакта */
    'jsx-quotes': [2, 'prefer-single'], // В JSX в атрибутах используются только одинарные кавычки
    'react/jsx-fragments': [2, 'element'], // Fragment объявляются как <Fragment> или <></>
    'react/jsx-indent-props': [2, 'first'], // Если props'ов много, то они записываются в столбик под первым props'ом
    'react/jsx-max-props-per-line': [2, {
      maximum: 2
    }],
    'react/prop-types': [2, {
      ignore: ['children']
    }], // Проверять типы props, кроме children
    'react/sort-comp': [2, {
      order: [
        'static-methods',
        'lifecycle',
        'everything-else',
        'render'
      ]
    }], // Возвращаем к изначальному правилу проверку порядка методов компонента. Правило от Airbnb конечно крутое, но слишком крутое
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function'
    }], // Допустимые стили написания функциональных компонентов

    /* Настройки плагина линтера Unicor */
    'unicorn/filename-case': [2, {
      cases: {
        kebabCase: true,
        pascalCase: true // Только для React компонентов
      }
    }], // Проверка стиля наименования файлов
    'unicorn/prevent-abbreviations': [0], // Отключает - Проверка читаемости имени переменной. Штука крутая, но мы слишком часто осмысленно их сокращаем, чтобы код лучше читался
    'unicorn/no-null': [0], // Отключает - Всегда писать undefined вместо null. Спорная штука, особенно в контексте реакта
    'unicorn/prefer-query-selector': [0], // Отключает - Всегда искать элементы с помощью querySelector. Так то getElementByID быстрее. Поэтому спорное правило
    'unicorn/prefer-number-properties': [0], // Отключает - Свойства типа parseInt и isNan должны браться от объекта Number. Поддержка у этой штуки слабовата
    'unicorn/prefer-dom-node-append': [0], // Отключает - Вместо appendNode использовать append. У append еще недостаточная для нас поддержка
    'unicorn/prefer-dom-node-remove': [0], // Отключает - Вместо removeChild использовать remove. У remove еще недостаточная для нас поддержка
    'unicorn/prefer-module': [0], // Отключает - Контролирует подключение модулей в едином стиле. Отключено, потому срабатывает на переменную названную module
    'unicorn/prefer-array-find': [0], // Отключает - Вместо filter использовать find. У find еще недостаточная поддержка
    'unicorn/prefer-node-protocol': [0], // Отключает - У модулей NodeJS должен быть указан протокол
    'unicorn/no-reduce': [0], // Отключает - Запрещает использовать Array#reduce
    'unicorn/no-fn-reference-in-iterator': [0], // Отключает - Запрещает записывать ссылки на функции в тело итераторов типа .map(), .forEach() и пр.
    'unicorn/no-array-for-each': [0], // Отключает - Нельзя использовать Array#forEach
    'unicorn/no-new-array': [0], // Отключает - Нельзя неочевидно объявлять массивы
    'unicorn/no-array-reduce': [0], // Отключает - Можно использовать reduce только в простых операциях
    'unicorn/prefer-ternary': [0], // Отключает - Контролирует чистоту использования условий
    'unicorn/numeric-separators-style': [0], // Отключает - Задает стиль разделения частей чисел

    /* Настройки плагина линтера JSDoc */
    'jsdoc/check-alignment': 2,
    'jsdoc/check-indentation': 2,
    'jsdoc/check-param-names': [2, {
      checkRestProperty: true
    }],
    'jsdoc/check-property-names': 2,
    'jsdoc/check-tag-names': 2,
    'jsdoc/check-types': 2,
    'jsdoc/implements-on-classes': 2,
    'jsdoc/newline-after-description': [2, 'never'],
    'jsdoc/no-bad-blocks': 2,
    'jsdoc/no-undefined-types': 2,
    'jsdoc/require-description': 0, // Если начал писать JSDoc доку, то и описание нужно обязательно написать
    'jsdoc/require-hyphen-before-param-description': 2,
    'jsdoc/require-jsdoc': 0, // Это правило нужно распространить на документированные папки и файлы. Типа helpers например
    'jsdoc/require-param': 0, // По хорошему нужно включить, но сейчас есть проблема, что тогда идет конфликт с простыми блочными комментариями. Они начинают считаться JSDoc комментариями
    'jsdoc/require-param-name': 2,
    'jsdoc/require-param-type': 2,
    'jsdoc/require-property': 2,
    'jsdoc/require-property-name': 2,
    'jsdoc/require-property-type': 2,
    'jsdoc/require-returns': 0, // По хорошему нужно включить, но сейчас есть проблема, что тогда идет конфликт с простыми блочными комментариями. Они начинают считаться JSDoc комментариями
    'jsdoc/require-returns-check': 2,
    'jsdoc/require-returns-type': 2,
    'jsdoc/valid-types': 2
  },
  overrides: [{
    files: ['*.ts', '*.tsx'],
    plugins: [
      '@typescript-eslint'
    ],
    extends: [
      'airbnb-typescript'
    ],
    rules: {
      /* Отключение Airbnb стилей для Typescript файлов */
      '@typescript-eslint/comma-dangle': [0] // Отключает - В конце объекта нужно всегда ставить ,
    }
  }]
};
