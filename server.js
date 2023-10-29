const express = require('express');

const PORT = 8080;
const app = express();

app.get('/api/names', (req, res) => {
    res.json('Welcome to the Friends App')

})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} with nodemon up`)
});
