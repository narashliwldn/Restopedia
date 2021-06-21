import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../data/restodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render(){
    return `
    <div class="content">
      <div id="resto" class="resto_detail"></div>
    </div>
    `;
  },

  async afterRender(){
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = createRestoDetailTemplate(resto.restaurant);
  },
};

export default Detail;
