const express = require('express');

const app = express(); //Calling this function sets up a server
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('Someone made a request!');
    res.render("index", {user: "Erni!"});
});

app.get('/users', (req, res) => {
    res.send('User list');
});

app.get('/users/new', (req, res) => {
    res.send('New user form');
});



app.listen(3030);

