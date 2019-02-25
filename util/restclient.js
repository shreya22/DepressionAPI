const axios = require("axios");

const GET_URL = "https://api.sheety.co/807cbee0-6212-45be-8e51-868d9f81ae53";
const TIMEOUT = 5000;

const restClient = {
    GET_QUOTES() {
        return axios.get(GET_URL, {
            timeout: TIMEOUT,
        });
    },
};

module.exports = restClient;
