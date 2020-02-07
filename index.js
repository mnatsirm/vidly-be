const express = require('express');
const app = express();

app.use(express.json());

const genres = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Horror' },
    { id: 3, name: 'Romance' }
];

app.get('/api/genres', (req, res) => {
    res.send(genres);
})

app.get('/api/genres/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) {
        return res.status(404).send('The genre with the given ID was not found.')
    }
    res.send(genre);
})

const port = process.env.PORT || 3100;
app.listen(port, () => console.log(`Listening on port ${port}...`))