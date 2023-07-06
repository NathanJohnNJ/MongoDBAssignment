const DragQueen = require("./model")

const getAllDragQueens = async (req, res) => {
    try {
        const dragqueens = await DragQueen.find({});
    const successResponse = {
        message: "Response sent successfully",
        dragqueens: dragqueens
    };
    res.status(200).json(successResponse);
    } catch (error) {
        console.log(error);
    }
};

const addDragQueen = async (req, res) => {
    try {
        const newDragQueen = await DragQueen.create({
            name: request.body.name,
            season: request.body.season,
            city: request.body.city,
            talents: request.body.talents,
            winner: request.body.winner
        })
        const successResponse = {
            message: "${request.body.title} successfully added.",
            newDragQueen: newDragQueen
        }
        response.status(200).json(successResponse);
    } catch (error) {
        console.log(error);
    }
};
const updateDragQueen = async (req, res) => {
    try {
        const updatedDragQueen = await DragQueen.updateOne(
            { name: request.body.name },
            { $set :{ author: request.body.author }
        })
        const successResponse = {
            message: "${request.body.name} successfully updated.",
            newDragQueen: updatedDragQueen
        }
        response.send(successResponse);
    } catch (error) {
        console.log(error);
    } 
};
const deleteDragQueen = async (req, res) => {
    try {
        const deletedDragQueen = await DragQueen.deleteOne({
            name: request.body.name,
        })
        const successResponse = {
            message: `${request.body.name} successfully deleted.`,
            newDragQueen: deletedDragQueen
        }
        response.send(successResponse);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllDragQueens,
    addDragQueen,
    updateDragQueen,
    deleteDragQueen
};