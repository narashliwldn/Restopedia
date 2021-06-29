import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
<h2 class="resto_title">${resto.name}</h2>
<img class="resto_image" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
<div class="resto_info">
<h3>Information</h3>
  <h4>Rating</h4>
  <p class="resto_rating">${resto.rating} ★</p>
  <h4>Kota</h4>
  <p>${resto.city}</p>
  <h4>Alamat</h4>
  <p>${resto.address}</p>
  <h4>Kategori Menu</h4>
  <ul class="resto_category">${resto.categories.map((category) => `<li>${category.name}</li>`)}
  </ul>
  <h4>Menu Makanan</h4>
  <ul>${resto.menus.foods.map((food) => `<li>${food.name}</li>`)}</ul>
  <h4>Menu Minuman</h4>
  <ul>${resto.menus.drinks.map((drink) => `<li>${drink.name}</li>`)}</ul>
</div>
<div class="resto_review">
  <h3>Review</h3>
  ${resto.customerReviews.map((reviewers) => `
    <h4>${reviewers.name}</h4>
    <p class="resto_review-date">${reviewers.date}</p>
    <p>${reviewers.review}
  `)}
</div>
`;

const createRestoItemTemplate = (resto) => `
<article class="card">
  <h2 tabindex="0" class="location"><i class="fas fa-map-marker-alt"></i> ${resto.city}</h2>
  <img tabindex="0" class="thumbnail" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="foto restoran ${resto.name}">
  <div class="content-card">
    <p tabindex="0" class="rating">Rating: ${resto.rating} ★</p>
    <h1 tabindex="0" class="title"><a href="#/detail/${resto.id}">${resto.name}</a></h1>
    <p tabindex="0" class="description">${resto.description.substring(0, 200)}...</p>
  </div>
</article>
`
;

export { createRestoDetailTemplate, createRestoItemTemplate };
