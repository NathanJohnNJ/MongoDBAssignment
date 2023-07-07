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
        const updatedQueen = await DragQueen.updateOne(
            { name: req.body.name },
            { $set :{ winner: req.body.update }
        });
        const successResponse = {
            message: `${req.body.name}'s winner field successfully updated to ${req.body.update}.`,
            updatedQueen: updatedQueen
        }
        res.send(successResponse);
    } catch (error) {
        console.log(error);
    } 
};
// const updateField = async (req, res) => {
//     console.log(req.body.key);
//     try {
//         const updatedField = await DragQueen.findOneAndUpdate(
//             { name: req.body.name },
//             { key: req.body.key},
//             { update: req.body.update }
//         );
//         const successResponse = {
//             message: `${updatedField.name}'s ${req.body.key} field successfully updated to ${req.body.update}.`
//         }
//         res.send(successResponse);
//     } catch (error) {
//         console.log(error);
//     } 
// };
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
const deleteAll = async (req, res) => {
    try {
        const deleted = await DragQueen.deleteMany({})
        const successResponse = {
            message: `All records successfully deleted.`,
            deleted: deleted
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
    deleteQueen,
    // updateField,
    deleteAll
};