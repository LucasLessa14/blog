const knex = require('../database');

module.exports = {
    
    async index (req, res) {
        const results = await knex('articles');
        return res.json(results);
    }
}