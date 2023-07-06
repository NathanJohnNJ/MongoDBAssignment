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
            name: req.body.name,
            season: [
                {country: req.body.season.country},
                {seasonNumber: req.body.season.seasonNumber}
            ],
            city: req.body.city,
            talents: req.body.talents,
            winner: req.body.winner
        })
        const successResponse = {
            message: "${req.body.title} successfully added.",
            newDragQueen: newDragQueen
        }
        res.status(200).json(successResponse);
    } catch (error) {
        console.log(error);
    }
};
const updateDragQueen = async (req, res) => {
    try {
        const updatedDragQueen = await DragQueen.updateOne(
            { name: req.body.name },
            { $set :{ author: req.body.author }
        })
        const successResponse = {
            message: "${req.body.name} successfully updated.",
            newDragQueen: updatedDragQueen
        }
        res.send(successResponse);
    } catch (error) {
        console.log(error);
    } 
};
const deleteDragQueen = async (req, res) => {
    try {
        const deletedDragQueen = await DragQueen.deleteOne({
            name: req.body.name,
        })
        const successResponse = {
            message: `${req.body.name} successfully deleted.`,
            newDragQueen: deletedDragQueen
        }
        res.send(successResponse);
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