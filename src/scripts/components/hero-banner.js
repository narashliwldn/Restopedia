class HeroBanner extends HTMLElement {
  constructor() {
    super();

  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.innerHTML = `
    <style>
      .hero {
        background-image: url("../images/heros/hero-image_2.jpg");
        width: 100%;
        display: flex;
        align-items: center;
        min-height: 380px;
        text-align: center;
        background-position: center;
        background-color: green;
        color: white;
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.7;
      }

      .hero_title {
        
      }



    </style>
    <div class="hero">
      <div class="hero_inner">
        <h1 class="hero_title">Mencari rekomendasi resto terbaik? Disinilah  tempatnya!</h1>
        <p>Puaskan perutmu dengan makanan yang lezat dan mengenyangkan yang akan membuatmu gembira</p>
      </div>
    </div>
    `;
  }
}

customElements.define("hero-banner", HeroBanner);
