import 'regenerator-runtime'; /* for async await transpile */
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome.min';

import '../styles/main.css';
import '../styles/responsive.css';
import './components/app-bar';
import './components/hero-banner';
import './components/footer-page';
import './components/resto-list';
// import './data/data-source.js';
import App from './views/app';
import swRegister from './utils/sw-register';
// document.addEventListener("DOMContentLouder", main);

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
