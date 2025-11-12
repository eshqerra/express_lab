const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Post location');
});

router.get('/new', (req, res) => {
    res.send('New post form');
});

module.exports = router;