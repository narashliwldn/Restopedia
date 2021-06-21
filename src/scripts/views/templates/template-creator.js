import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
<h2 class="resto_title">${resto.name}</h2>
<img class="resto_image" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
<div class="resto_info">
<h3>Information</h3>
  <h4>Rating</h4>
  <p>${resto.rating}</p>
  <h4>City</h4>
  <p>${resto.city}</p>
  <h4>Address</h4>
  <p>${resto.address}</p>
  <h4>Categories</h4>
  <p>${resto.categories.name}</p>
</div>
<div class="resto_review">
  <h3>Review</h3>
  <h4>${resto.customerReviews.name}</h4>
  <p>${resto.customerReviews.date}</p>
  <p>${resto.customerReviews.review}</p>
</div>
`;

const createRestoItemTemplate = (resto) => `
<article class="card">
  <h2 tabindex="0" class="location"><i class="fas fa-map-marker-alt"></i> ${resto.city}</h2>
  <img tabindex="0" class="thumbnail" src="${resto.pictureId}" alt="foto restoran ${resto.name}">
  <div class="content-card">
    <p tabindex="0" class="rating">Rating: ${resto.rating} ★</p>
    <h1 tabindex="0" class="title">${resto.name}</h1>
    <p tabindex="0" class="description">${resto.description.substring(0, 200)}...</p>
  </div>
</article>
`
;
