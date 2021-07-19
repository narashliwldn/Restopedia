import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate, createSkeletonTemplate } from '../templates/template-creator';
import SpinnerLoading from '../templates/spinner-loading';

const Home = {
  async render() {
    return `
    <hero-banner></hero-banner>
      <div id="loading"></div>
        <div class="content" id="maincontent">
          <div class="lists">
            <h2 class="list_label">Yuk Eksplor Restoran</h2>
            <resto-list>
            </resto-list>
          </div>
        </div>
    `;
  },

  async afterRender() {
    const restoContainer = document.querySelector('.container');
    const loading = document.querySelector('#loading');
    loading.innerHTML = SpinnerLoading();

    try {
      restoContainer.innerHTML = createSkeletonTemplate(20);
      const restos = await RestoDbSource.homeResto();
      restoContainer.innerHTML = '';
      restos.forEach((resto) => {
        restoContainer.innerHTML += createRestoItemTemplate(resto);
      });
      loading.style.display = 'none';
    } catch (error) {
      loading.style.display = 'none';
      restoContainer.innerHTML = `Error: ${error}, gagal memuat data. Silahkan refresh ulang `;
    }
  },
};

export default Home;
