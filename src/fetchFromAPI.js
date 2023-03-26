import axios from 'axios';
export const BASE_URL = 'https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights';

const options = {
    params: {
      maxResults: 5,
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
     
  
    return data;
  };
  