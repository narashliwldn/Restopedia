class AppBar extends HTMLElement {
  constructor() {
    super();

  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.innerHTML = `
    <nav class="navbar" id="drawer">
      <div class="header">
        <h1 class="header_title">
          Restopedia
        </h1>
      </div>
        <ul class="nav-list">
          <li class="nav-item"><a href="#">Home</a></li>
          <li class="nav-item"><a href="#">Favorite</a></li>
          <li class="nav-item"><a href="#">About Us</a></li>
        </ul>
        <a id="menu" class="nav_menu">☰</a>
    </nav>
    `;
  }
}

customElements.define("app-bar", AppBar);
