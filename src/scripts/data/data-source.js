const container = document.querySelector('#content');

import(../DATA.json).then(({default: jsonData}) => {
  console.log(jsonData);
  let datas = jsonData['restaurants'];
  let dataList = '';
  datas.forEach(function(data){
    dataList += `
      <article class="card">
        <h2 tabindex="0" class="location">${data.city}</h2>
        <img tabindex="0" class="thumbnail" src="${data.pictureId}" alt="foto restoran ${data.name}">
        <div class="content">
          <p tabindex="0" class="rating">Rating: ${data.rating} ★</p>
          <h1 tabindex="0" class="title">${data.name}</h1>
          <p tabindex="0" class="description">${data.description.slice(0, 100)}...</p>
        </div>
      </article>
    `;
    });
    container.innerHTML = "<p>Test</p>";
});
