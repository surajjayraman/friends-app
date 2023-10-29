let data = [
    { "uid": "10f4dc3d89bb", "name": "Ali Gator" },
    { "uid": "b16f63101776", "name": "Sue Permann" },
    { "uid": "337e39bccc6d", "name": "Rose Gardner" },
    { "uid": "ee7cd570992d", "name": "Macon Paine" },
    { "uid": "e2cae1a21b70", "name": "Wanda Rinn" }
];

const express = require('express');
const morgan = require('morgan');

const PORT = 8080;
const app = express();

app.use(morgan('dev'));

app.get('/api/names', (req, res) => {
    res.json(data)

})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} with nodemon up`)
});
