const axios = require("axios");
// const URL_PREFIX = "http://localhost:3001";
const URL_PREFIX = "https://rg-247fbk.herokuapp.com/";

//TODO: Change url to deployed heroku url and comment out localhost
// const URL_PREFIX = "**heroku website url**"

const API = {
  login: function (userData) {
    return axios.post(`${URL_PREFIX}/login`, userData);
  },
  signup: function (userData) {
    return axios.post(`${URL_PREFIX}/signup`, userData);
  },
  getProfile: function (token) {
    return axios.get(`${URL_PREFIX}/profile`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  getAllPlayers: function () {
    return axios.get(`${URL_PREFIX}/players`);
  },
  getPlayersByTeam: function (team) {
    return axios.get(`${URL_PREFIX}/players/team/${team}`);
  },
  getPlayersByPosition: function (position) {
    return axios.get(`${URL_PREFIX}//players/position/${position}`);
  },
  getPlayersByName: function (name) {
    return axios.get(`${URL_PREFIX}/players/name/${name}`);
  },
  getPlayersByNumber: function (number) {
    return axios.get(`${URL_PREFIX}//players/number/${number}`);
  },
};

export default API;
