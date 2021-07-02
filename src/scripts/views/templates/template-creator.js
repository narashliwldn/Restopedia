import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <h2 class="resto_title">${resto.name}</h2>
  <img class="resto_image" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
  <h3 class="header_detail">Information</h3>
  <div class="resto_info">
    <h4 class="header_resto_info">Rating</h4>
      <p class="resto_rating">${resto.rating} ★</p>
    <h4 class="header_resto_info">Kota</h4>
      <p>${resto.city}</p>
    <h4 class="header_resto_info">Alamat</h4>
      <p>${resto.address}</p>
    <h4 class="header_resto_info">Deskripsi</h4>
      <p>${resto.description}</p>
    <h4 class="header_resto_info">Kategori Menu</h4>
      <ul class="resto_category">${resto.categories.map((category) => `<li>${category.name}</li>`).join(' ')}
      </ul>
    <h3 class="header_detail">Menu</h3>
    <div class="resto_menu">
      <div class="card content-card">
      <h4>Menu Makanan</h4>
        <ul>${resto.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}</ul>
      </div>
      <div class="card content-card">
      <h4>Menu Minuman</h4>
        <ul>${resto.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}</ul>
      </div>
    </div>
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

const createCustomerReviewTemplate = (user) => `
  <div class="resto_review">
    <div class="resto_review-item">
      <div class="content-card">
        <h4 class="resto_review-item_title">${user.name}</h4>
        <p class="resto_review-item_date">${user.date}</p>
        <p class="resto_review-item_reviewers">${user.review}</p>
      </div>
    </div>
  </div>
`
;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`
;

const createLikedButtonTemplate = () =>`
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`
;

export { createRestoDetailTemplate, createRestoItemTemplate, createCustomerReviewTemplate, createLikeButtonTemplate, createLikedButtonTemplate };
