# Проект для испытаний - персональный сайт/блог
- Node.js 12.13+
- Koa
- Webpack 4.41
- Pug
- Stylus
- ES7
- and other...

### Инструкция для запуска сервера:
* `npm run server` - Запуск сервера в production режиме
* `npm run server:dev` - Запуск сервера в development режиме(C линтером и livereload'ом)

### Инструкция для запуска frontend'а:
* `npm run front` - Сборка production версии
* `npm run front:dev` - Запуск dev сервера ддя разработки

Примечание: Для общей разработки сервера и фронтенда необходимо сначала запустить `npm run front:dev`, а потом `npm run server:dev`

### Запуск базы данных MongoDB

* `mkdir -p data/db/` - Создание директории в корне проекта для хранения базы данных
* `mongod --dbpath data/db` - Запуск базы данных в директории указанной выше

### Запуск базы данных MongoDB в Docker

* `docker run -d -p 127.0.0.1:27017:27017 --name mongo-exp-project mongo` - Загрузка последнего образа MongoDB. Старт его на 27017 порту.
* `docker ps -a` - Если контейнер остановился, или система была перезагружена, позволяет узнать ID контейнера для последующего перезапуска
* `docker start ${ID_Контейнера}` - Запуск остановленного контейнера
* `docker exec -it ${ID_Контейнера} mongo` - Доступ к оболочки MongoDB
* `docker exec -it ${ID_Контейнера} bash` - Доступ к Bash терминалу контейнера