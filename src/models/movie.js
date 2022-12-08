// 4th Create models
const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    synopsis: {
        type: String,
    },
    coverImage: {
        type: String,
    },
    genre: {
        type: String,
        required: true,
    },
    movieUrl: {
        type: String,
    },
    releaseDate: {
        type: Date,
    }
});

const MovieModel = mongoose.model("Movie", MovieSchema);

module.exports = MovieModel;
