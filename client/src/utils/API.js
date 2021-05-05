import axios from 'axios';
// const APIKey = process.env.REACT_APP_API_KEY;
const BASEURL = 'https://www.googleapis.com/books/v1/volumes?q=';

export const API = {
  search: function (query) {
    return axios.get(BASEURL + query);
  },
  save: function (book) {},
};
