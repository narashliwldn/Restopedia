import from './src/DATA.json';

class DataSource {
  static async getAllResto() {
    try {
      const response = await fetch(`./src/DATA.json`);
      const responseJson = await response.json();
      if (responseJson.restaurants) {
        return Promise.resolve(responseJson.restaurants);
      } else {
        return Promise.reject(`${keyword} is not found`);
      }
    }
    catch (error) {
      return Promise.reject(error);
    }
    }
}

export default DataSource;
