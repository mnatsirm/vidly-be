const genres = require('./routes/genres');
const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/genres', genres);

const port = process.env.PORT || 3100;
app.listen(port, () => console.log(`Listening on port ${port}...`))