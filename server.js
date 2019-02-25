const express = require("express");
const getQuote = require("./util/quotes.js");

const PORT = 8085;
const app = express();

// Ping test for service
app.get("/ping", (request, response) => {
    response.send("Depression API is running....");
});

// Get a single random quote
app.get("/", (request, response) => {
    response.send(getQuote.random());
});

// Get all quotes at once
app.get("/all", (request, response) => {
    response.send(getQuote.all());
});

app.listen(process.env.PORT || PORT);
