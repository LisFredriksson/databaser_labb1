const { getAllBooks, addBook } = require("../repositories/bookRepository");


async function get(req, res) {

    let data = await getAllBooks();

    return res.render('books/index', { data, title: 'ALL BOOKS' });
}




async function getDetails(req, res) {

    let data = await getAllBooks();
    let id = req.params.id;

    res.render('books/details', { id, data, title: 'Details' });

}

async function add(req, res) {
    addBook(req.body.postedData)
}

module.exports = {
    get,
    add,
    getDetails
}
