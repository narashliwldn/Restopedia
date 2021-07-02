import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render(){
    return `
    <hero-banner></hero-banner>
        <div class="content">
          <div class="lists">
            <h2 class="list_label">Yuk Eksplor Restoran</h2>
            <resto-list></resto-list>
          </div>
        </div>
    `;
  },

  async afterRender(){
    const restos = await RestoDbSource.homeResto();
    const restoContainer = document.querySelector('.container');
    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
