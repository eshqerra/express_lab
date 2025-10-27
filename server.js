const express = require('express');

const app = express(); //Calling this function sets up a server


app.get('/', (req, res) => {
    console.log('Someone made a request!');
    res.send('Here!');
});

app.listen(3030);

