const express = require("express");
const app = express();
const DragQueen = require("./dragQueens/model");
const dragqueenRouter = require("./dragQueens/routes");
require("dotenv").config();
require("./db/connection");

// app.use("/dragqueens", express.static("dragqueens"));
app.use(express.json())
app.use(dragqueenRouter);

app.put("/dragqueens/updateauthor", async (request, response) => {
    const updatedDragQueen = await DragQueen.updateOne(
        { title: request.body.title },
        { $set :{ author: request.body.author }
    })
    const successResponse = {
        message: "DragQueen successfully updated.",
        newDragQueen: updatedDragQueen
    }
    response.send(successResponse)
})
app.delete("/dragqueens/deletedragqueen", async (request, response) => {
    const deletedDragQueen = await DragQueen.deleteOne({
        title: request.body.title,
    })
    const successResponse = {
        message: `DragQueen called ${request.body.title} successfully deleted.`,
        newDragQueen: deletedDragQueen
    }
    response.send(successResponse)
})

app.listen(5001, () => console.log("Server is listening"));


