const pgp = require('pg-promise')(/* options */)

const db = pgp('postgres://postgres:Nallepuh9988@localhost:5432/libraryDb')

async function selectAllBooks() {

    let data = await db.many("SELECT * FROM book")

    return data;
}

async function selectAllAuthors() {

    let data = await db.many("SELECT * FROM author")

    return data;
}

async function selectAllGenrers() {

    let data = await db.many("SELECT * FROM genre")

    return data;
}

async function selectAllLoans() {

    let data = await db.many("SELECT * FROM loan")

    return data;
}

async function insertBook(title, description, author_id, genre_id, relese_date, pages, rating, image) {


    let result = await db.none(`INSERT INTO book(title, description, author_id, genre_id, relese_date, pages, rating, image) VALUES('${title}', '${description}', '${author_id}', '${genre_id}', '${relese_date}', ${pages}, ${rating}, '${image}')`)
        .catch((error) => {
            console.log('ERROR:', error)
        })

    return result;
}

async function updateBook(title, description, author_id, genre_id, relese_date, pages, rating, image, book_id) {


    let result = await db.query(`UPDATE book SET title = '${title}', description = '${description}',author_id = '${author_id}', genre_id = '${genre_id}', relese_date = '${relese_date}', pages = ${pages}, rating = ${rating}, image = '${image}' WHERE book_id = '${book_id}'`)
        .catch((error) => {
            console.log('ERROR:', error)
        })

    return result;
}

async function deleteBook(book_id) {


    let result = await db.query(`DELETE FROM book WHERE book_id = '${book_id}'`)
        .catch((error) => {
            console.log('ERROR:', error)
        })

    return result;
}

async function insertAuthorShort(name) {
    let result = await db.none(`INSERT INTO author(name) VALUES('${name}')`)
        .catch((error) => {
            console.log('ERROR:', error)
        })

    return result
}

async function insertGenre(name) {
    let result = await db.none(`INSERT INTO genre(name) VALUES('${name}')`)
        .catch((error) => {
            console.log('ERROR:', error)
        })

    return result
}

module.exports = {
    selectAllBooks,
    selectAllLoans,
    insertBook,
    selectAllAuthors,
    selectAllGenrers,
    insertAuthorShort,
    insertGenre,
    updateBook,
    deleteBook
}
