import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestoDetailTemplate = (resto) => `
  <h2 tabindex="0" class="resto_title">${resto.name}</h2>
  <img tabindex="0" class="resto_image lazyload" src="placeholder.jpeg" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
  <h3 tabindex="0" class="header_detail">Information</h3>
  <div class="resto_info">
    <h4 tabindex="0" class="header_resto_info">Rating</h4>
      <p tabindex="0" class="resto_rating">${resto.rating} ★</p>
    <h4 tabindex="0" class="header_resto_info">Kota</h4>
      <p tabindex="0" >${resto.city}</p>
    <h4 tabindex="0" class="header_resto_info">Alamat</h4>
      <p tabindex="0">${resto.address}</p>
    <h4 tabindex="0" class="header_resto_info">Deskripsi</h4>
      <p tabindex="0">${resto.description}</p>
    <h4 tabindex="0" class="header_resto_info">Kategori Menu</h4>
      <ul class="resto_category">${resto.categories.map((category) => `<li tabindex="0">${category.name}</li>`).join(' ')}
      </ul>
    <h3 tabindex="0" class="header_detail">Menu</h3>
    <div class="resto_menu">
      <div class="card content-card">
      <h4 tabindex="0">Menu Makanan</h4>
        <ul>${resto.menus.foods.map((food) => `<li tabindex="0">${food.name}</li>`).join('')}</ul>
      </div>
      <div class="card content-card">
      <h4 tabindex="0">Menu Minuman</h4>
        <ul>${resto.menus.drinks.map((drink) => `<li tabindex="0">${drink.name}</li>`).join('')}</ul>
      </div>
    </div>
  </div>
`;

const createRestoItemTemplate = (resto) => `
  <article class="card">
    <h2 tabindex="0" class="location"><i class="fas fa-map-marker-alt"></i> ${resto.city}</h2>
    <img tabindex="0" class="thumbnail lazyload" src="placeholder.jpeg" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="foto restoran ${resto.name}">
    <div class="content-card">
      <p tabindex="0" class="rating">Rating: ${resto.rating} ★</p>
      <h1 tabindex="0" class="title"><a href="#/detail/${resto.id}">${resto.name}</a></h1>
      <p tabindex="0" class="description">${resto.description.substring(0, 200)}...</p>
    </div>
  </article>
`;
const createCustomerReviewTemplate = (user) => `
  <div class="resto_review">
    <div class="resto_review-item">
      <div class="content-card">
        <h4 tabindex="0" class="resto_review-item_title">${user.name}</h4>
        <p tabindex="0" class="resto_review-item_date">${user.date}</p>
        <p tabindex="0" class="resto_review-item_reviewers">${user.review}</p>
      </div>
    </div>
  </div>
`;
const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
const createSkeletonItemTemplate = (count) => {
  let template = '';
  for (let i = 0; i < count; i++) {
    template += `
    <article class="card">
      <h2 tabindex="0" class="location skeleton"><i class="fas fa-map-marker-alt"></i> Kota </h2>
      <img tabindex="0" class="thumbnail lazyload" src="placeholder.jpeg" alt="foto skeleton">
      <div class="content-card">
        <p tabindex="0" class="rating skeleton">Rating: Rating ★</p>
        <h1 tabindex="0" class="title skeleton"><a href="#/detail/id">Nama Resto</a></h1>
        <p tabindex="0" class="description skeleton">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi ullam ad mollitia cupiditate aut iure officia, voluptate, sapiente modi quisquam est quod quas recusandae quo saepe atque nisi blanditiis.</p>
      </div>
    </article>
  `;
  }
  return template;
};
const createSkeletonDetailTemplate = () => `<h2 tabindex="0" class="resto_title skeleton">Nama Resto</h2>
  <img tabindex="0" class="resto_image lazyload" src="placeholder.jpeg" alt="skeleton" />
  <h3 tabindex="0" class="header_detail skeleton">Information</h3>
  <div class="resto_info">
    <h4 tabindex="0" class="header_resto_info skeleton">Rating</h4>
      <p tabindex="0" class="resto_rating skeleton"> ★</p>
    <h4 tabindex="0" class="header_resto_info skeleton">Kota</h4>
      <p tabindex="0" class="skeleton">kota</p>
    <h4 tabindex="0" class="header_resto_info skeleton">Alamat</h4>
      <p tabindex="0" class="skeleton">alamat</p>
    <h4 tabindex="0" class="header_resto_info skeleton">Deskripsi</h4>
      <p tabindex="0" class="skeleton">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi ullam ad mollitia cupiditate aut iure officia, voluptate, sapiente modi quisquam est quod quas recusandae quo saepe atque nisi blanditiis.</p>
    <h4 tabindex="0" class="header_resto_info skeleton">Kategori Menu</h4>
      <ul class="resto_category skeleton">
        <li>menu</li>
        <li>menu</li>
      </ul>
    <h3 tabindex="0" class="header_detail skeleton">Menu</h3>
    <div class="resto_menu">
      <div class="card content-card">
      <h4 tabindex="0" class="skeleton">Menu Makanan</h4>
        <ul class="skeleton">
          <li>menu</li>
          <li>menu</li>
          <li>menu</li>
        </ul>
      </div>
      <div class="card content-card">
      <h4 tabindex="0" class="skeleton">Menu Minuman</h4>
        <ul class="skeleton">
          <li>menu</li>
          <li>menu</li>
          <li>menu</li>
        </ul>
      </div>
    </div>
  </div>
  `;
const createSkeletonReviewTemplate = (count) => {
  let template = '';
  for (let i = 0; i < count; i++) {
    template = `
    <div class="resto_review">
      <div class="resto_review-item">
        <div class="content-card">
          <h4 tabindex="0" class="resto_review-item_title skeleton">username</h4>
          <p tabindex="0" class="resto_review-item_date skeleton">date</p>
          <p tabindex="0" class="resto_review-item_reviewers skeleton">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  `;
  }
  return template;
};
export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createCustomerReviewTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
  createSkeletonItemTemplate,
  createSkeletonDetailTemplate,
  createSkeletonReviewTemplate,
};
