class RestoList extends HTMLElement {
  constructor() {
    super();

  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.innerHTML = `
    <div class="container"></div>
    `;
  }

}

customElements.define("resto-list", RestoList);
