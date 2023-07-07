const { Router } = require("express");
const queenRouter = Router()
const { getAllQueens, addQueen, updateQueen, deleteQueen } = require("./controllers");

queenRouter.get("/dragqueens/getallqueens", getAllQueens);
queenRouter.post("/dragqueens/addqueen", addQueen);
queenRouter.put("/dragqueens/updatequeen", updateQueen);
queenRouter.delete("/dragqueens/deletequeen", deleteQueen);

module.exports = queenRouter;