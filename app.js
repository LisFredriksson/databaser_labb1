const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan')

app.set('view engine', 'ejs');

//middlewere & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));


app.get('/', (req, res) => {
    //res.send(<h1>ABOUT</h1>);
    res.render('home', { title: 'Home' })
});

app.get('/books', (req, res) => {
    //res.send(<h1>ABOUT</h1>);
    res.render('books', { title: 'Books' })
});

app.get('/books/borrow', (req, res) => {
    //res.send(<h1>ABOUT</h1>);
    res.render('borrow', { title: 'Borrow books' })
});

//404 page (must be at the bottom)
app.use(() => {
    res.status(404).render('404', { title: '404' })
})

app.listen(3001);
