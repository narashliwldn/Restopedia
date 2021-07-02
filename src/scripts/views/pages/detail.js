import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../data/restodb-source';
import { createRestoDetailTemplate, createCustomerReviewTemplate } from '../templates/template-creator';
import LikeButtonIniator from '../../utils/like-button-initiator';
import PostReview from '../../utils/post-review';

const Detail = {
  async render(){
    return `
    <div class="content">
      <div id="resto" class="resto_detail"></div>
      <h3 id="review_title" class="header_detail"></h3>
      <div class="form-review">
          <form>
            <div class="form-column">
              <label for="inputName" class="form-label">Name</label>
              <input name="inputName" type="text" class="form-control" id="inputName">
            </div>
            <div class="form-column">
              <label for="inputReview" class="form-label">Review</label>
              <input name="inputReview" type="text" class="form-control" id="inputReview">
            </div>
            <button id="submit-review" type="submit" class="btn2">Submit</button>
          </form>
        </div>
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
        id: resto.restaurant.id,
        name: resto.restaurant.name,
        description: resto.restaurant.description,
        city: resto.restaurant.city,
        rating: resto.restaurant.rating,
        pictureId: resto.restaurant.pictureId,
      },
    });

    const btnSubmit = document.querySelector('#submit-review');
    const nameInput = document.querySelector('#inputName');
    const reviewInput = document.querySelector('#inputReview');

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (nameInput.value === '' || reviewInput.value === '') {
        // eslint-disable-next-line no-alert
        alert('Inputan tidak boleh ada yang kosong');
        nameInput.value = '';
        reviewInput.value = '';
      } else {
        PostReview(url, nameInput.value, reviewInput.value);
        nameInput.value = '';
        reviewInput.value = '';
      }
    });
  },
};

export default Detail;
