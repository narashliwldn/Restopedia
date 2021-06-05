class HeroBanner extends HTMLElement {
  constructor() {
    super();

  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.innerHTML = `
    <div class="hero">
      <div class="hero_inner">
        <h1 class="hero_title">Mencari rekomendasi resto terbaik? <br> Disinilah  tempatnya!</h1>
        <!-- <p>Puaskan perutmu dengan makanan yang lezat dan mengenyangkan yang akan membuatmu bahagia</p> -->
        <p>Tersedia rekomendasi dari banyak restoran terbaik yang akan membuatmu bahagia </p>
      </div>
    </div>
    `;
  }
}

customElements.define("hero-banner", HeroBanner);
