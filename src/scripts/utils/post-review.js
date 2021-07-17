import RestoDbSource from '../data/restodb-source';

const PostReview = (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };
  RestoDbSource.postRestaurant(dataInput);

  const reviewContainer = document.querySelector('#reviewers');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);
  const newReview = `
    <div class="resto_review">
      <div class="resto_review-item">
        <div class="content-card">
          <h4 class="resto_review-item_title">${name}</h4>
          <p class="resto_review-item_date">${date}</p>
          <p class="resto_review-item_reviewers">${review}</p>
        </div>
      </div>
    </div>
    `;
  reviewContainer.innerHTML += newReview;
};

export default PostReview;
