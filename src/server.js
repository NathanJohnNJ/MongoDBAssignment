const express = require("express");
const app = express();
const queenRouter = require("./dragQueens/routes");
require("dotenv").config();
require("./db/connection");

// app.use("/dragqueens", express.static("dragqueens"));
app.use(express.json())
app.use(queenRouter);

app.listen(5001, () => console.log("Server is listening"));


