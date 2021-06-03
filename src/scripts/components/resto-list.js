class RestoList extends HTMLElement {
  constructor() {
    super();

  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.innerHTML = `
    <div id="content"></div>
    `;
  }

}

customElements.define("resto-list", RestoList);
