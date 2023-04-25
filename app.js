const express = require('express');
const app = express();
const cors = require('cors');



//middlewere & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
