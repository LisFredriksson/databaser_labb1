const { getAllBooks, addBook } = require("../repositories/bookRepository");

/*
const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('blogs/index', { title: 'All blogs', blogs: result })
        })
        .catch((err) => {
            console.log(err);
        })
}
*/

async function get(req, res) {

    let data = await getAllBooks();

    return res.render('books/index', { data, title: 'ALL BOOKS' });
}

async function add(req, res) {
    addBook(req.body.postedData)
}

const getDetails = (req, res) => {
    const id = req.params.id;
    getAllBooks.findById(id)
        .then(result => {
            res.render('books/details', { book: result, title: 'book details' })
        })
        .catch(err => {
            console.log(err)
        })
}


module.exports = {
    get,
    add,
    getDetails
}
