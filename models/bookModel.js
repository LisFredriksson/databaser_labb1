module.exports = class book {
    constructor(book_id, title, description, author_id, genre_id, relese_date, pages, rating, image) {
        this.book_id = book_id;
        this.title = title;
        this.description = description;
        this.author_id = author_id;
        this.genre_id = genre_id;
        this.relese_date = relese_date;
        this.pages = pages;
        this.rating = rating;
        this.image = image;
    }
}
