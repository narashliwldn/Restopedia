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
        background-repeat: no-repeat;
        background-size: cover;
        /* opacity: 0.9; */
        word-break: break-word;
      }

      .hero_title {
        font-weight: 800;
        font-family: 'Assistant', sans-serif;
        font-size: 50px;
        /* -webkit-text-stroke: 1px; */
        opacity: 0.8;
        text-align: center;
        vertical-align: middle;
        color: #f7fbfc;
      }

      .hero_inner p {
        font-size: 25px;
        text-align: center;
        color: #f7fbfc;
      }


    </style>
    <div class="hero">
      <div class="hero_inner">
        <h1 class="hero_title">Mencari rekomendasi resto terbaik? <br> Disinilah  tempatnya!</h1>
        <p>Puaskan perutmu dengan makanan yang lezat dan mengenyangkan yang akan membuatmu gembira</p>
      </div>
    </div>
    `;
  }
}

customElements.define("hero-banner", HeroBanner);
