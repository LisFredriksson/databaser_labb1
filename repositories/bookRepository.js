const bookModel = require("../models/bookModel");
const db_context = require("../library_db");

async function getAllBooks() {

    let books = [];

    let data = await db_context.selectAllBooks()

    data.forEach(book => {
        books.push(new bookModel(book))
    });

    return books;
};

async function addBook(title) {

    //Vi hrådkodar 90 som är sverige
    db_context.insertBook(title, 90)


};

module.exports = {
    getAllBooks,
    addBook
}
