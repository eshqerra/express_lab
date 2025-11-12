const express = require('express');
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');
const app = express(); //Calling this function sets up a server

app.set('view engine', 'ejs');
app.use('/users', userRouter);
app.use('/postsLocation', postRouter);

app.get('/', (req, res) => {
    console.log('Someone made a request!');
    res.render("index", {user: "Erni!"});
});


app.listen(3030);

