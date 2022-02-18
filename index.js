const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 4000;
// const requestTimeOut = require('./views/timeOut');

// use requestTimeOut middleware

module.exports =(req, res, next) => {
    let day = new Date().getDay();
    let time = new Date().getHours;

    if( time > 9 && time < 17 && day !== 0 && day !== 0) next()
    else {
        res.render("Site Unavailable")
    }
}
// app.use(requestTimeOut);

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