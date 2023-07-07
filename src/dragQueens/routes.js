const { Router } = require("express");
const queenRouter = Router()
const { getAllQueens, addQueen, updateQueen, deleteQueen, deleteAll } = require("./controllers");

queenRouter.get("/dragqueens/getallqueens", getAllQueens);
queenRouter.post("/dragqueens/addqueen", addQueen);
queenRouter.put("/dragqueens/updatequeen", updateQueen);
// queenRouter.put("/dragqueens/updatefield", updateField);
queenRouter.delete("/dragqueens/deletequeen", deleteQueen);
queenRouter.delete("/dragqueens/deleteall", deleteAll);

module.exports = queenRouter;