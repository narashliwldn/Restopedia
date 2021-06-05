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
        <button type="button" id="menu" class="nav_menu" aria-label="navigation button"><i class="fas fa-bars"></i></button>
        <ul class="nav-list" id="drawer">
          <li class="nav-item"><a href="/">Home</a></li>
          <li class="nav-item"><a href="#">Favorite</a></li>
          <li class="nav-item"><a href="https://github.com/narashliwldn">About Us</a></li>
        </ul>
    </nav>
    `;
  }
}

customElements.define("app-bar", AppBar);
