require('dotenv/config');

const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// notFound 
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404,
    next(error)
});

// catch all
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({ error: error.message });
})

app.listen(process.env.PORT || 3001, () => {
    console.log("server rodando!!");
});