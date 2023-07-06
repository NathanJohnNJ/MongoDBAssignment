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

module.exports = {
    getAllDragQueens
};