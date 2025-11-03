const express = require('express');

const app = express(); //Calling this function sets up a server
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('Someone made a request!');
    res.render("index");
});

app.listen(3030);

