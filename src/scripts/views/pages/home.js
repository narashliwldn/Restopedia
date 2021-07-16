import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';
import SpinnerLoading from '../templates/spinner-loading';

const Home = {
  async render() {
    return `
    <hero-banner></hero-banner>
      <div id="loading"></div>
        <div class="content" id="maincontent">
          <div class="lists">
            <h2 class="list_label">Yuk Eksplor Restoran</h2>
            <resto-list></resto-list>
          </div>
        </div>
    `;
  },

  async afterRender() {
    const restoContainer = document.querySelector('.container');
    const loading = document.querySelector('#loading');
    loading.innerHTML = SpinnerLoading();

    try {
      const restos = await RestoDbSource.homeResto();
      restos.forEach((resto) => {
        restoContainer.innerHTML += createRestoItemTemplate(resto);
      });
      loading.style.display = 'none';
    } catch (error) {
      loading.style.display = 'none';
      restoContainer.innerHTML = `Error: ${error}, swipe up of press F5 to refresh `;
    }
  },
};

export default Home;
