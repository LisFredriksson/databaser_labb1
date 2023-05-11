const loanModel = require("../models/loanModel");
const db_context = require("../library_db");

async function getAllLoans() {

    let books = [];

    let data = await db_context.selectAllLoans()

    data.forEach(loan => {
        books.push(new loanModel(loan.loan_id, loan.book_id, loan.loan_date))
    });

    return books;
};

module.exports = {
    getAllLoans,
}
