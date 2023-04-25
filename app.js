const express = require('express');
const app = express();
const cors = require('cors');

//middlewere & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get('/', (req, res) => {
    res.redirect('/home')
});
app.get('/home', (req, res) => {
    //res.send(<h1>ABOUT</h1>);
    res.render('home', { title: 'Home' })
});


//blog routes
const libraryRoutes = require('./routes/libraryRoutes')
app.use('/library', libraryRoutes)

//404 page (must be at the bottom)
app.use(() => {
    res.status(404).render('404', { title: '404' })
})

app.listen(3000);
