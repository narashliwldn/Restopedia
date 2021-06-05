class FooterPage extends HTMLElement {
  constructor() {
    super();

  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.innerHTML = `
    <footer class="footer">
      <p>copyright © 2020 - Restopedia</p>
    </footer>
    `;
  }
}

customElements.define("footer-page", FooterPage);
