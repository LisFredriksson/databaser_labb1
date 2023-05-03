const bookModel = require("../models/genreModel");
const db_context = require("../library_db");

async function getAllGenrers() {

    let genrers = [];

    let data = await db_context.selectAllGenrers()

    data.forEach(genre => {
        genrers.push(new bookModel(genre.genre_id, genre.name))
    });

    return genrers;
};

module.exports = {
    getAllGenrers,
}
