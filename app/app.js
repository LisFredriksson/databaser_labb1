const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const server = http.createServer(app)
const { Server } = require("socket.io");
const io = new Server(server)
app.set('view engine', 'ejs');
app.set('views');

//middlewere & static files
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

server.listen(3001, () => {
    console.log('listening on port 3001')
})
//Router

const homeRouter = require('../api/routes/homeRouter');
app.use('/', homeRouter);

const booksRouter = require('../api/routes/booksRouter');
app.use('/books', booksRouter);

//404 page (must be at the bottom)
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})

//socket setup

const room = "chattrummet"
const waitingRoom = "vänterummet, du är placerad i kö."
var peopleInRoom = 0

io.on('connection', (socket) => {
    console.log('person ansluten')
    peopleInRoom++
    if (peopleInRoom <= 2) {
        socket.join(room);
        socket.emit('server message', 'Välkommen till chattrummet')
        console.log(peopleInRoom)
    } else {
        socket.join(waitingRoom)
        socket.emit('server message', 'Välkommen till väntrummet<br> Du är placerad i kö...')
        console.log(peopleInRoom)
    }

    socket.on('disconnect', () => { // PÅ händelsen disconnect | NIVÅ: SOCKET (anslutning)
        console.log('A user disconnected');
        peopleInRoom--; // MINSKA antalet personer i main room med 1
    });

    socket.on('chat message', (msg => {
        io.to(room).emit('chat message', msg)
    }))

    socket.on('typing', function (data) {
        socket.broadcast.to(room).emit('typing', data)
    })
})
