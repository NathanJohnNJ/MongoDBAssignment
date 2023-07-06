const mongoose = require("mongoose");

// DragQueen:
//     id: string - automatically created
//     title: string   
//     author: string
//     genre: string
const seasonSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true,
        unique: false
    },
    seasonNumber: {
        type: Number,
        required: true,
        unique: false
    }
});

const talentSchema = new mongoose.Schema([]);

const dragqueenSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },
    season: [seasonSchema],
    city: {
        type: String,
        required: true,
        unique: false
    },
    talents: [talentSchema],
    winner: { Boolean }
});

const DragQueen = mongoose.model("dragqueen", dragqueenSchema);
module.exports = DragQueen;