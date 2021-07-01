import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../data/restodb-source';
import { createRestoDetailTemplate, createCustomerReviewTemplate } from '../templates/template-creator';
import LikeButtonIniator from '../../utils/like-button-initiator';

const Detail = {
  async render(){
    return `
    <div class="content">
      <div id="resto" class="resto_detail"></div>
      <h3 id="review_title"></h3>
      <div id="reviewers" class="resto_detail-review"></div>
      <div id="likeButtonContainer"></div>
    </div>
    `;
  },

  async afterRender(){
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto');
    const userRateContainer = document.querySelector('#reviewers');
    const headerReview = document.querySelector('#review_title');
    restoContainer.innerHTML = createRestoDetailTemplate(resto.restaurant);

    resto.restaurant.customerReviews.forEach((userItem) => {
      userRateContainer.innerHTML += createCustomerReviewTemplate(userItem);
    });

    headerReview.innerHTML = "Review";

    LikeButtonIniator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        city: resto.city,
        rating: resto.rating,
        pictureId: resto.pictureId,
      },
    });
  },
};

export default Detail;
