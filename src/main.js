import template from './template.mustache';

document.addEventListener('DOMContentLoaded', () => {
  startApp();
});

function startApp() {
  document.body.innerHTML = template.render({ header: 'It Lives!' });
}

