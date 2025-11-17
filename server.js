const express = require('express');
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');
const app = express(); //Calling this function sets up a server

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
// app.use(logger);


app.use('/users', userRouter);
app.use('/postsLocation', postRouter);


app.get('/', (req, res) => {
    console.log('Someone made a request!');
    res.render("index", {user: "Erni!"});
});

app.get('/new', (req, res) => {
    res.render('users/new', {firstName: "Please enter your first name"});

});

app.listen(3030);

function logger(req, res, next) {
    console.log(`Page Accessed: ${req.originalUrl}`);
    next();
}   