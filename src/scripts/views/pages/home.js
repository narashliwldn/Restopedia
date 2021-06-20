import RestoDbSource from '../../data/restodb-source';

const Home = {
  async render(){
    return `
    <main id="maincontent">
      <div class="content">
        <div class="lists">
          <h2 class="list_label">Explore Restaurant</h2>
          <resto-list></resto-list>
        </div>
      </div>
    </main>
    `;
  },

  async afterRender(){
    const restos = await RestoDbSource.homeResto();
    console.log(restos);
  },
};

export default Home;
