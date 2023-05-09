const { getAllBooks, addBook, updateOneBook, deleteOneBook } = require("../repositories/bookRepository");
const { getAllGenrers, addGenre } = require("../repositories/genreRepository");
const { getAllAuthors, addAuthorShort } = require("../repositories/authorRepository");


async function get(req, res) {

    let data = await getAllBooks();
    let genre = await getAllGenrers();
    let author = await getAllAuthors();

    return res.render('books/index', { data, genre, author, title: 'ALL BOOKS' });
}

async function getCreate(req, res) {
    let genre = await getAllGenrers();
    let author = await getAllAuthors();

    return res.render('books/create', { genre, author, title: 'ADD BOOK' });
}

async function getChat(req, res) {

    return res.render('books/chat', { title: 'CHAT' });
}


async function getChange(req, res) {
    let genre = await getAllGenrers();
    let author = await getAllAuthors();
    let book = await getAllBooks();
    let chosenBook = req.body.book_title

    return res.render('books/change', { genre, author, book, chosenBook, title: 'UPDATE' });
}

async function addAuthor(req, res) {

    addAuthorShort(req.body.author_name)

    res.redirect('create')

}

async function addNewGenre(req, res) {

    addGenre(req.body.genre_name)

    res.redirect('create')

}


async function getDetails(req, res) {

    let data = await getAllBooks();
    let genre = await getAllGenrers();
    let author = await getAllAuthors();
    let id = req.params.id;

    res.render('books/details', { id, data, genre, author, title: 'Details' });

}


async function add(req, res) {
    let genre = await getAllGenrers();
    let author = await getAllAuthors();
    let authorInput = req.body.author_name
    let genreInput = req.body.genre_name
    let genreId = '';
    let authorId = '';

    genre.forEach(genre => {
        if (genre.name === genreInput) {
            genreId = genre.genre_id
        }
    });

    author.forEach(author => {
        if (author.name === authorInput) {
            authorId = author.author_id
        }
    });


    addBook(req.body.title, req.body.description, authorId, genreId, req.body.relese_date, req.body.pages, req.body.rating, req.body.image)

    res.redirect('books')

}

async function update(req, res) {

    let genre = await getAllGenrers();
    let author = await getAllAuthors();
    let authorInput = req.body.author
    let genreInput = req.body.genre
    let genreId = '';
    let authorId = '';

    genre.forEach(genre => {
        if (genre.name === genreInput) {
            genreId = genre.genre_id
        }
    });

    author.forEach(author => {
        if (author.name === authorInput) {
            authorId = author.author_id
        }
    });

    updateOneBook(req.body.title, req.body.description, authorId, genreId, req.body.relese_date, req.body.pages, req.body.rating, req.body.image, req.body.book_id)

}

async function deleted(req, res) {
    deleteOneBook(req.body.book_id)
}


module.exports = {
    get,
    add,
    getDetails,
    getCreate,
    getChange,
    addAuthor,
    addNewGenre,
    update,
    deleted,
    getChat
}
