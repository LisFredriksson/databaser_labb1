const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan')

app.set('view engine', 'ejs');

//middlewere & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


app.listen(3001);

app.get('/', (req, res) => {
    //res.send(<h1>ABOUT</h1>);
    res.render('home', { title: 'Home' })
});


const booksRouter = require('./routes/booksRouter');
app.use('/books', booksRouter);



//404 page (must be at the bottom)
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})
