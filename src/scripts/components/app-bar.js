class AppBar extends HTMLElement {
  constructor() {
    super();

  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.innerHTML = `
    <style>
      .navbar {
        background-color: #b9d7ea;
        color: #f7fbfc;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
      }

      .header {
        flex-grow: 4;
        padding: 10px;
      }

      .nav-list {
        list-style-type: none;

      }

      .nav-item {
        display: inline-block;
        padding: 20px 10px;
      }

      .navbar a {
        text-decoration: none;
        color: #f7fbfc;
      }

      .navbar a:hover {
        color: #769fcd;
      }

    </style>
    <nav class="navbar">
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
    </nav>
    `;
  }
}

customElements.define("app-bar", AppBar);
