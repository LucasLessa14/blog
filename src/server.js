require('dotenv/config');

const express = require('express');
const knex = require('./database');
const app = express();

app.get('/', async (req,res) => {
    const results = await knex('articles');
    res.json(results);
});

app.listen(process.env.PORT || 3001);