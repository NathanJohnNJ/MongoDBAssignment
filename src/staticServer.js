const express = require("express");
const app = express();
require("dotenv").config();
require("./db/connection");

app.use("/dragqueens", express.static("dragqueens"));
app.use("/", express.static("anotherRoute"));
app.use("/mine", express.static("thisIsMyRoute"));
app.use("/anotherOne", express.static("yetAnotherRoute"));

app.get("/dragqueen", (request, response) => {
    response.send("Hello from the dragqueen route.")
})
app.get("/", (request, response) => {
    response.send("Hello from another route.")
})

