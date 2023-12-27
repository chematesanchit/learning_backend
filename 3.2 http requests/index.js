const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.get('/contact', (req, res) => {
    res.send('Hello from Express!');
});

app.get('/about', (req, res) => {
    res.send('Hello from Express!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
