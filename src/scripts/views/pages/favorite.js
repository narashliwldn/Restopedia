import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render(){
    return `
    <hero-banner></hero-banner>
      <div class="content">
        <div class="lists">
          <h2 class="list_label">Resto Favoritku</h2>
          <div id="restos" class="container"></div>
        </div>
      </div>
    `;
  },

  async afterRender(){
    const restos = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });

  },

};

export default Favorite;
