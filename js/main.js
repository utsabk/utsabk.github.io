'use strict';

window.addEventListener('load', () => {

  const ul = document.querySelector('ul');
  const form = document.querySelector('form');
  const message = form.elements.message;

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');

    const data = [];

    form.addEventListener('submit', () => {

      event.preventDefault();

      data.push(message.value);

      console.log('inside event listner',data);
      ul.innerHTML = '';
      data.forEach(item =>
          ul.innerHTML += `<li>${item}</li>`,
      );


      message.value = '';

    });

  }
});
