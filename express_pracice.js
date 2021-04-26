const express = require("express");
const app = express();

// our first Route
app.get("/home", (request, response, next) => {
    console.log(request);
    response.send("<h1>Welcome Ironhacker. :)</h1>");
});
