class RestoList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container"></div>
    `;
  }
}

customElements.define('resto-list', RestoList);
