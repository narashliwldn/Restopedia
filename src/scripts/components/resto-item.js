class RestoItem extends HTMLElement {

   constructor() {
       super();
   }

   set resto(resto) {
       this._resto = resto;
       this.render();
   }

   get resto(){
     return this.querySelector();
   }

   render() {
       this.innerHTML =
       `
       <style>
        .list-resto {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            width: 100%;
            border-radius: 5px;
            overflow: hidden;
        }

        .list-resto_content {
            padding: 16px 32px 32px 32px;
        }

        .list-resto_rating {

        }

        .list-resto_name {
            font-weight: 500;
            font-size: 18px;
            margin-top: 16px;
            transition: 0.3s opacity;
        }

        .list-resto_description {
            margin-top: 16px;
            font-size: 14px;
            line-height: 1.5em;
        }


       </style>
       <article class="list-resto">
         <img src="${this._resto.pictureId}" alt="gambar pilihan resto">
         <div class="list-resto_content">
          <p class="list-resto_rating">${this._resto.rating}</p>
          <h2 class="list-resto_name">${this._resto.name}</h2>
          <p class="list-resto_description">${this._resto.description}</p>
         </div>

       </article>`;
   }
}

customElements.define("resto-item", RestoItem);
