const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 4000;
const requestTimeOut = require('./middleware/timeOut');

// use requestTimeOut middleware
app.use(requestTimeOut);

// set view engine
app.set('view engine', 'ejs');

// index page
app.get('/', (req, res) => {
    res.render('pages/index');
});

// about page
app.get('/about', (req, res) => {
    res.render('pages/about');
});

// contact page
app.get('/contact', (req, res) => {
    res.render('pages/contact')
})


// creating server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})