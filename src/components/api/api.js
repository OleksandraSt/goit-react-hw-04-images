// import axios from 'axios';
// const api = { fetchImages };
// export default api;

// const BASE_URL = 'https://pixabay.com/api/';
// const KEY = '33320021-cdc1c826e22c035744437b643';

// async function fetchImages(query, page) {
//   try {
//       const response = await axios.get(
//       `${BASE_URL}?key=${KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`,
//       );
//       return response;
      
//   }
//   catch (error) {
//       console.log(error);
//   }
// };




function fetchImages(query, page) {
    return fetch(
      `https://pixabay.com/api/?q=${query}}&page=${page}&key=33320021-cdc1c826e22c035744437b643&image_type=photo&orientation=horizontal&per_page=12`
    ).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(
        new Error(`За вашим запитом ${query} нічого не знайдено`)
      );
    });
  }
  
const api = { fetchImages };
export default api;