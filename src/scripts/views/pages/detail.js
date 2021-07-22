import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../data/restodb-source';
import {
  createRestoDetailTemplate,
  createCustomerReviewTemplate,
  createSkeletonDetailTemplate,
  createSkeletonReviewTemplate,
} from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import PostReview from '../../utils/post-review';
import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import SpinnerLoading from '../templates/spinner-loading';

const Detail = {
  async render() {
    return `
    <div class="content">
      <div id="loading"></div>
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
            <button id="submit-review" type="submit" class="btnSubmit">Submit</button>
          </form>
        </div>
      <div id="reviewers" class="resto_detail-review"></div>
      <div id="likeButtonContainer"></div>
    </div>
    `;
  },

  async afterRender() {
    let scriptElement = document.querySelector('script[src="https://kit.fontawesome.com/54d44760a9.js"]');

    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.src = 'https://kit.fontawesome.com/54d44760a9.js';
      document.body.appendChild(scriptElement);
    }

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restoContainer = document.querySelector('#resto');
    const userRateContainer = document.querySelector('#reviewers');
    const headerReview = document.querySelector('#review_title');
    const loading = document.querySelector('#loading');
    const skiplink = document.querySelector('.skip-link');

    loading.innerHTML = SpinnerLoading();
    headerReview.innerHTML = 'Review';

    try {
      restoContainer.innerHTML = createSkeletonDetailTemplate();
      userRateContainer.innerHTML = createSkeletonReviewTemplate(3);
      const resto = await RestoDbSource.detailResto(url.id);
      restoContainer.innerHTML = '';
      restoContainer.innerHTML = createRestoDetailTemplate(resto.restaurant);
      userRateContainer.innerHTML = '';

      resto.restaurant.customerReviews.forEach((userItem) => {
        userRateContainer.innerHTML += createCustomerReviewTemplate(userItem);
      });

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteResto: FavoriteRestoIdb,
        resto: {
          id: resto.restaurant.id,
          name: resto.restaurant.name,
          description: resto.restaurant.description,
          city: resto.restaurant.city,
          rating: resto.restaurant.rating,
          pictureId: resto.restaurant.pictureId,
        },
      });
      loading.style.display = 'none';
    } catch (error) {
      restoContainer.innerHTML = `Error: ${error} gagal memuat data. Silahkan refresh ulang`;
      loading.style.display = 'none';
    }

    const btnSubmit = document.querySelector('#submit-review');
    const nameInput = document.querySelector('#inputName');
    const reviewInput = document.querySelector('#inputReview');

    btnSubmit.addEventListener('click', (event) => {
      event.preventDefault();
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
    btnSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      if (!navigator.onLine) {
        alert('Maaf tidak bisa memberi komentar. Silahkan refresh ulang');
      } else {
        PostReview(url, nameInput.value, reviewInput.value);
      }
      nameInput.value = '';
      reviewInput.value = '';
    });
  },
};

export default Detail;
