const fs   = require('fs');
const path = require('path');

module.exports = id => {
  return JSON.parse(fs.readFileSync(path.join(appRoot, 'db', 'topics', `${id}.json`), 'utf8'));
};
