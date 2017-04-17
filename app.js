const express = require('express');
const path    = require('path');
const fs      = require('fs');

const app = express();
const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, 'config', 'manifest.json'), 'utf8'));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'app', 'views'));

app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {
  res.locals.assets = manifest.assets;
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

require('./config/routes.js')(app);

app.listen(app.get('port'), () => {
  console.log('Express запущен на http://localhost:' + app.get('port') + ' ; нажмите Ctrl + C для завершения');
});