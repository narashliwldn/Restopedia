import 'regenerator-runtime'; /* for async await transpile */

import '../styles/main.css';
import '../styles/responsive.css';
import './components/app-bar';
import './components/hero-banner';
import './components/footer-page';
import './components/resto-list';
// import './data/data-source.js';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  if (window.location.hash.substr(1) !== 'maincontent') {
    app.renderPage();
  }
});

window.addEventListener('DOMContentLoaded', () => {
  app.renderPage();
  swRegister();
});
