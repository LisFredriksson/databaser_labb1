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

const booksRouter = require('./routes/booksRouter');
app.use('/books', booksRouter);

app.get('/admin', (req, res) => {
    //res.send(<h1>ABOUT</h1>);
    res.render('admin', { title: 'Admin' })
});

app.listen(3001);

//404 page (must be at the bottom)
app.use(() => {
    res.status(404).render('404', { title: '404' })
})
