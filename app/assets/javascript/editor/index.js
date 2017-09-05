'use strict';

const serializer = require('form-serialize');

module.exports = function() {
  const form = document.querySelector('.js-editor-form');

  if (form) {
    const deleteButton = document.querySelector('.js-delete-topic');
    const url = location.href.replace('/edit', '');

    form.addEventListener('submit', e => {
      e.preventDefault();

      const data = serializer(form, { hash: true });

      /* eslint-disable compat/compat, no-alert */

      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(() => {
        alert('Топик успешно сохранен');
      });

      /* eslint-enable compat/compat, no-alert */
    });

    deleteButton.addEventListener('click', () => {
      fetch(url, {
        method: 'DELETE'
      }).then(() => {
        alert('Топик успешно удален')
      })
    })
  }
};
