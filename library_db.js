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

async function insertBook(title, description, relese_date, pages, rating, image) {

    let result = await db.none(`INSERT INTO book(title, description, relese_date, pages, rating, image) VALUES('${title}', '${description}', '${relese_date}', ${pages}, ${rating}, '${image}')`)
        .catch((error) => {
            console.log('ERROR:', error)
        })

    return result;
}

module.exports = {
    selectAllBooks,
    selectAllLoans,
    insertBook,
    selectAllAuthors,
    selectAllGenrers
}
