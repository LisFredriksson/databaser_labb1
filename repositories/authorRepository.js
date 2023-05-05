const bookModel = require("../models/authorModel");
const db_context = require("../library_db");

async function getAllAuthors() {

    let authors = [];

    let data = await db_context.selectAllAuthors()

    data.forEach(author => {
        authors.push(new bookModel(author.author_id, author.name, author.nationality, author.birth_date))
    });

    return authors;
};


async function addAuthorShort(name) {
    db_context.insertAuthorShort(name)
};

module.exports = {
    getAllAuthors,
    addAuthorShort
}
