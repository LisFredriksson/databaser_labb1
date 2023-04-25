const pgp = require('pg-promise')(/* options */)

const db = pgp('postgres://postgres:Nallepuh9988@localhost:5432/libraryDb')

async function selectAllBooks() {

    let data = await db.many("SELECT * FROM books")

    return data;
}

async function selectAllLoans() {

    let data = await db.many("SELECT * FROM loan")

    return data;
}

async function insertBook() {

    await db.none(`INSERT INTO books(book, book) VALUES(${title}, ${book})`)
        .catch((error) => {
            console.log('ERROR:', error)
        })

    return result;
}

module.exports = {
    selectAllBooks,
    selectAllLoans,
    insertBook
}
