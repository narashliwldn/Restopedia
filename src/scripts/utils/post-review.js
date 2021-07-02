import RestoDbSource from '../data/restodb-source';

const PostReview = (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };
  RestoDbSource.postRestaurant(dataInput);

  const reviewContainer = document.querySelector('.resto_review');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);
  const newReview = `
    <div class="resto_review-item">
        <p class="resto_review-item_title"><i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em;"></i>&nbsp;${name}</p>
        <p class="resto_review-item_date">${date}</p>
      <div class="resto_review-item_reviewers">
        ${review}
      </div>
    </div>
    `;
  reviewContainer.innerHTML += newReview;
};

export default PostReview;
