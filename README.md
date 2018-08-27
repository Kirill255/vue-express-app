# vue-app

> A Vue.js project

## Запуск

``` bash
npm install

npm start
```

* Установил сначала через vue-cli webpack шаблон `npx vue-cli init webpack vue-app`
* Установил в левую папку express через express-generator `npx express-generator --view=hbs myapp`
* Перекинул из папки express в папку vue все нужные файлы bin, routes, app.js
* Установил зависимости для express все кроме hbs, взял из package.json в папке с express
* Дальше по гайду примерно +-, гайд был с ошибками
* Вместо socketio поставил socket.io, и остальные зависимости последних версий типа bootstrap и т.д.
* В проекте остались некоторые ненужные файлы и папки, впринципе можно удалить
* Работает так, что мы просто билдим vue-приожение и потом отдаём его как статику express'ом


* socketio https://www.npmjs.com/package/socketio
* socket.io https://www.npmjs.com/package/socket.io
* `"start": "npm run build && SET DEBUG=vue-app:* && nodemon ./bin/www",`
* https://www.djamware.com/post/5b6a681f80aca76a2cbd98fb/mongodb-express-vuejs-2-nodejs-mevn-and-socketio-chat-app
* https://github.com/didinj/mevn-vue2-chat-app-example
