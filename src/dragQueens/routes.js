const { Router } = require("express");
const dragqueenRouter = Router()
const { getAllDragQueens, addDragQueen, updateDragQueen, deleteDragQueen } = require("./controllers");

dragqueenRouter.get("/dragqueens/getalldragqueens", getAllDragQueens);
dragqueenRouter.post("/dragqueens/adddragqueen", addDragQueen);
dragqueenRouter.put("/draggqueens/updatedragqueen", updateDragQueen);
dragqueenRouter.delete("/draggqueens/deletedragqueen", deleteDragQueen);

module.exports = dragqueenRouter;