import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import { createRestoItemTemplate, createSkeletonTemplate } from '../templates/template-creator';
import SpinnerLoading from '../templates/spinner-loading';

const Favorite = {
  async render() {
    return `
    <hero-banner></hero-banner>
      <div id="loading"></div>
      <div class="content">
        <div class="lists">
          <h2 class="list_label">Resto Favoritku</h2>
          <div id="restos" class="container"></div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restoContainer = document.querySelector('#restos');
    restoContainer.innerHTML = createSkeletonTemplate(3);
    const restos = await FavoriteRestoIdb.getAllResto();
    const skiplink = document.querySelector('.skip-link');

    skiplink.style.display = 'none';
    restoContainer.innerHTML = '';

    if (restos.length === 0) {
      restoContainer.innerHTML = `
      <p class="resto_empty">Kamu belum memilih resto favoritmu.</p>
      `;
    }
    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },

};

export default Favorite;
