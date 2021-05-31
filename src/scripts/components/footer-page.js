class FooterPage extends HTMLElement {
  constructor() {
    super();

  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.innerHTML = `
    <style>
      footer {
        background-color: #b9d7ea;
        color: white;
        padding: 1em;
        width: 100%;
        text-align: center;
      }

    </style>
    <footer>
      <p>copyright 2020 - Restopedia</p>
    </footer>
    `;
  }
}

customElements.define("footer-page", FooterPage);
