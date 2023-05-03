const { json } = require("stream/consumers");
const { getAllBooks, addBook } = require("../repositories/bookRepository");
const { getAllGenrers } = require("../repositories/genreRepository");
const { getAllAuthors } = require("../repositories/authorRepository");


async function get(req, res) {

    let data = await getAllBooks();
    let genre = await getAllGenrers();
    let author = await getAllAuthors();

    return res.render('books/index', { data, genre, author, title: 'ALL BOOKS' });
}

async function getCreate(req, res) {
    return res.render('books/create', { title: 'ADMIN' });
}


async function getDetails(req, res) {

    let data = await getAllBooks();
    let genre = await getAllGenrers();
    let author = await getAllAuthors();
    let id = req.params.id;

    res.render('books/details', { id, data, genre, author, title: 'Details' });

}


async function add(req, res) {
    addBook(req.body.title, req.body.description, req.body.relese_date, req.body.pages, req.body.rating, req.body.image)

    res.redirect('books')
}

module.exports = {
    get,
    add,
    getDetails,
    getCreate
}
