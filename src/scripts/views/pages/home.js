import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render(){
    return `
    <main id="maincontent">
      <div class="content">
        <div class="lists">
          <h2 class="list_label">Explore Restaurant</h2>
          <resto-list></resto-list>
        </div>
      </div>
    </main>
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
