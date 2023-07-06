const mongoose = require("mongoose");

// DragQueen:
//     id: string - automatically created
//     title: string   
//     author: string
//     genre: string

const dragqueenSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true,
        unique: false
    },
    genre: {
        type: String,
        required: true,
        unique: false
    }
});

const DragQueen = mongoose.model("dragqueen", dragqueenSchema);
module.exports = DragQueen;