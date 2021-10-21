const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send(' Wow, I am  excited to learn Node & express with nodemon.automatic restart');
});

app.listen(port, () => {
    console.log('Listening to port', port);
})
