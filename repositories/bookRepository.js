const bookModel = require("../models/bookModel");
const db_context = require("../library_db");

async function getAllBooks() {

    let books = [];

    let data = await db_context.selectAllBooks()

    data.forEach(book => {
        books.push(new bookModel(book.book_id, book.title, book.description, book.author_id, book.genre_id, book.relese_date, book.pages, book.rating, book.image))
    });

    return books;
};


async function addBook(title, description, author_id, genre_id, relese_date, pages, rating, image) {
    db_context.insertBook(title, description, author_id, genre_id, relese_date, pages, rating, image)
};

module.exports = {
    getAllBooks,
    addBook
}
