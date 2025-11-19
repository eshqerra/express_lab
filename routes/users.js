const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render(`users/list`, {users: users});
});

router.get('/new', (req, res) => {
    res.render('users/new', {firstName: "Please enter your first name"});

});

router.post('/', (req, res) => {
    // res.send('Creating a new user');
    const names = req.body.firstName;
    const isValid = names !=="";
    if (isValid) {
        console.log(`Adding User: ${names}`);
        users.push({name: names});
        console.log(`New Set of Users: ${users}`);
        res.send("Success!");
    }
    else {
        console.log("Invalid User Data");
        res.render("users/new", {firstName: names});
    }   
});

// router.get('/:ide', (req, res) => {
//     res.send(`Getting User data: ${req.params.id}`);
// });

router.route('/:id').get((req, res) => {
    res.send(`Getting User Data: ${req.params.id}`);
}).delete((req, res) => {
    res.send(`Deleting User data: ${req.params.id}`);
}).put((req, res) => {
    res.send(`Updating User data: ${req.params.id}`);
});

const users = [{name: "George"}, {name: "Sally"}, {name: "Barbara"}];






router.param('id', (req, res, next, id) => {
    console.log(`Accessing user: #${id}`);
    next();
});
module.exports = router;
