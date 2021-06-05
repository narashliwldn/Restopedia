class AppBar extends HTMLElement {
  constructor() {
    super();

  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.innerHTML = `
    <nav class="navbar">
      <div class="header">
        <h1 class="header_title">
          Restopedia
        </h1>
      </div>
        <ul class="nav-list" id="drawer">
          <li class="nav-item"><a href="#home">Home</a></li>
          <li class="nav-item"><a href="#">Favorite</a></li>
          <li class="nav-item"><a href="https://github.com/narashliwldn">About Us</a></li>
        </ul>
        <a id="menu" class="nav_menu"><i class="fas fa-bars"></i></a>
    </nav>
    `;
  }
}

customElements.define("app-bar", AppBar);
