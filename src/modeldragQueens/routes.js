const { Router } = require("express");

const dragqueenRouter = Router()

const DragQueen = require("./model")
const { getAllDragQueens } = require("./controllers");
dragqueenRouter.get("/dragqueens/getalldragqueens", getAllDragQueens);
// dragqueenRouter.get("/dragqueens/getalldragqueens", async (request, response) => {
//     try {
//         const dragqueens = await DragQueen.find({});
//     const successResponse = {
//         message: "Response sent successfully",
//         dragqueens: dragqueens
//     }
//     response.status(200).json(successResponse);
//     } catch (error) {
//         console.log(error)
//     }
// });

dragqueenRouter.post("/dragqueens/adddragqueen", async (request, response) => {
    try {
        const newDragQueen = await DragQueen.create({
            // id: Math.floor(Math.random()*50), - now we're linking to a DB this will be automatically generated
            title: request.body.title,
            author: request.body.author,
            genre: request.body.genre
        })
        const successResponse = {
            message: "New dragqueen successfully added.",
            newDragQueen: newDragQueen
        }
        response.status(200).json(successResponse);
    } catch (error) {
        console.log(error);
    }
})

module.exports = dragqueenRouter;