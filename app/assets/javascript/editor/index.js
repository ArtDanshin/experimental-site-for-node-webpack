'use strict';

const serializer = require('form-serialize');

module.exports = function() {
  const form = document.querySelector('.js-editor-form');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const url = location.href.replace('/edit', '');
      const data = serializer(form, { hash: true });

      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(() => {
        alert('Топик успешно сохранен');
      });
    });
  }
};
