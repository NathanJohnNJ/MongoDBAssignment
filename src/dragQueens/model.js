const mongoose = require("mongoose");


// const seasonSchema = new mongoose.Schema({
//         country: {
//             type: String,
//             required: false,
//             unique: false
//         },
//         seasonNumber: {
//             type: String,
//             required: false,
//             unique: false
//         },
// });

const seasonSchema = new mongoose.Schema({
        country: String,
        seasonNumber: Number,
        allStars: Boolean,
        allStarsSeason: {
            type: Number,
            required: false
        }
  });

const talentSchema = new mongoose.Schema({ 
        first: {
            type: String,
            required: true
        },
        second: String,
        third: String
});

const queenSchema = new mongoose.Schema ({
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
    winner: {
     type: Boolean,
     required: true
    },
    url: String
});

const DragQueen = mongoose.model("dragqueen", queenSchema);
module.exports = DragQueen;