const genreModel = require("../models/genreModel");
const db_context = require("../library_db");

async function getAllGenrers() {

    let genrers = [];

    let data = await db_context.selectAllGenrers()

    data.forEach(genre => {
        genrers.push(new genreModel(genre.genre_id, genre.name))
    });

    return genrers;
};

async function addGenre(name) {
    db_context.insertGenre(name)
};

module.exports = {
    getAllGenrers,
    addGenre
}
