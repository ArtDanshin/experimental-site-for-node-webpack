const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);

require('./config/routes.js')(app);

app.listen(app.get('port'), () => {
  console.log('Express запущен на http://localhost:' + app.get('port') + ' ; нажмите Ctrl + C для завершения');
});