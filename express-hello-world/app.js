const express = require("express");
const app = express();

// ...
// our first Route:
app.get("/home", (request, response, next) =>
    response.sendFile(__dirname + "/views/home-page.html")
);

// cat route:
app.get("/cat", (request, response, next) =>
    response.sendFile(__dirname + "/views/cat-page.html")
);

// send views/index.hbs for displaying in the browser
// app.js

app.get("/", (req, res, next) => {
    let data = {
      name: "Ironhacker",
      lastName: "Rocking it!",
      address: {
        street: "Your heart",
        number: 87
      },
      cities: ["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Mexico City", "Miami", "Paris", "Sao Paulo"]
    };
  
    res.render("index", data);
  });
  

app.get("/maha", (req, res, next) => res.render("me"));

// ...

// Make everything inside of public/ available
app.use(express.static("public"));

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// Server Started
app.listen(3000, () => console.log("My first app listening on port 3000!"));
