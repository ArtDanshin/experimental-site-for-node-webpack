const express = require('express');
const path    = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'app/views'));

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, "public")));

require('./config/routes.js')(app);

app.listen(app.get('port'), () => {
  console.log('Express запущен на http://localhost:' + app.get('port') + ' ; нажмите Ctrl + C для завершения');
});