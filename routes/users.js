const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('User list');
});

router.get('/new', (req, res) => {
    res.send('New user form');
});

router.post('/', (req, res) => {

});

// router.get('/:ide', (req, res) => {
//     res.send(`Getting User data: ${req.params.id}`);
// });

router.route('/:id').get((req, res) => {
    res.send(`Getting User data: ${req.params.id}`);
}).delete((req, res) => {
    res.send(`Deleting User data: ${req.params.id}`);
}).put((req, res) => {
    res.send(`Updating User data: ${req.params.id}`);
});

router.param('id', (req, res, next, id) => {
    console.log(`Accessing user: ${id}`);
    next();
});
module.exports = router;
