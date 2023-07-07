const DragQueen = require("./model")

const getAllQueens = async (req, res) => {
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

const addQueen = async (req, res) => {
    try {
        const newQueen = await DragQueen.create({
            name: req.body.name,
            season: req.body.season,
            city: req.body.city,
            talents: req.body.talents,
            winner: req.body.winner,
            url: req.body.url
        })
        const successResponse = {
            message: `${req.body.name} successfully added.`,
            newQueen: newQueen
        }
        res.status(200).json(successResponse);
    } catch (error) {
        console.log(error);
    }
};
const updateQueen = async (req, res) => {
    try {
        const updateField = req.body.updateField;
        const updatedQueen = await DragQueen.updateOne(
            { name: req.body.name },
            { $set :{ updateField: req.body.update }
        });
        const successResponse = {
            message: `${req.body.name}'s ${updateField} successfully updated.`,
        }
        res.send(successResponse);
    } catch (error) {
        console.log(error);
    } 
};
const deleteQueen = async (req, res) => {
    try {
        const deletedQueen = await DragQueen.deleteOne({
            name: req.body.name,
        })
        const successResponse = {
            message: `${req.body.name} successfully deleted.`,
            deletedQueen: deletedQueen
        }
        res.send(successResponse);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllQueens,
    addQueen,
    updateQueen,
    deleteQueen
};