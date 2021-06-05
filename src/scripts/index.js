import 'regenerator-runtime'; /* for async await transpile */
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '@fortawesome/fontawesome-free/js/fontawesome.min.js'

import '../styles/main.css';
import '../styles/responsive.css';
import './components/app-bar.js';
import './components/hero-banner.js';
import './components/footer-page.js';
import './components/resto-list.js'
import './data/data-source.js';

// document.addEventListener("DOMContentLouder", main);

const menuButtonElement = document.querySelector("#menu");
const drawerElement = document.querySelector("#drawer");
const mainElement = document.querySelector("main");

menuButtonElement.addEventListener("click", event => {
 drawerElement.classList.toggle("open");
 event.stopPropagation();
});


mainElement.addEventListener("click", event => {
 drawerElement.classList.remove("open");
 event.stopPropagation();
})
