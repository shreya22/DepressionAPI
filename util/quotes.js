const cache = require("memory-cache");
const restClient = require("./restclient.js");

// 10 mins cache to refresh quotes
const CACHE_TIMEOUT = 600000;

function RefreshQuotes() {
    restClient
        .GET_QUOTES()
        .then((response) => {
            console.log("Caching new data...");
            InsertDataIntoCache(response.data);
        })
        .catch((error) => {
            console.log("Error in getting sheety API data!");
            console.log(error);
        });
}

function InsertDataIntoCache(data) {
    cache.put("quotes", data, CACHE_TIMEOUT, RefreshQuotes);
}

const getQuote = {
    random() {
        const allData = cache.get("quotes");
        const randomIndex = Math.floor(Math.random() * allData.length);
        const randomQuote = allData[randomIndex];
        return randomQuote;
    },
    all() {
        const allData = cache.get("quotes");
        return allData;
    },
};

RefreshQuotes();

module.exports = getQuote;
