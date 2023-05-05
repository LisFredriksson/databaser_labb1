const { getAllBooks, addBook } = require("../repositories/bookRepository");
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

    return res.render('books/create', { genre, author, title: 'ADMIN' });
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
        } else { genreId = '' }
    });


    for (let i = 0; i < author.length; i++) {
        if (author[i].name == authorInput) {
            authorId = author[i].author_id
        } else if (i == author.length - 1 && authorId == '') {
            addAuthorShort(authorInput)
        }
    }

    addBook(req.body.title, req.body.description, authorId, genreId, req.body.relese_date, req.body.pages, req.body.rating, req.body.image)

    res.redirect('books')

}

module.exports = {
    get,
    add,
    getDetails,
    getCreate,
    addAuthor,
    addNewGenre
}
