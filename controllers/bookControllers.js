const { getAllBooks, addBook } = require("../repositories/bookRepository");

async function get(req, res) {

    let data = await getAllBooks();

    return res.json(data);
}

async function add(req, res) {
    addBook(req.body.postedData)
}


module.exports = {
    get,
    add
}
