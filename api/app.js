const express = require('express');
const app = express();
var path = require('path');
const cors = require('cors');
app.set('view engine', 'ejs');
app.set('views', path.join('C:/Users/lisfr/Documents/GitHub/databaser_labb1/app/views'));



const homeRouter = require('./routes/homeRouter');
app.use('/', homeRouter);

const booksRouter = require('./routes/booksRouter');
app.use('/books', booksRouter);

//middlewere & static files
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());



app.listen(3001, () => {
    console.log('listening on port 3001')
})
