const fs   = require('fs');
const path = require('path');

module.exports = list => {
  return JSON.parse(fs.readFileSync(path.join(appRoot, 'db', 'lists', `${list}.json`), 'utf8'));
};