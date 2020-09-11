const knex = require('../database');
const slugify = require("slugify");

class Article {
    async findAll() {
        try {
            var results = await knex('articles').select(['title', 'slug'])
            return results;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async findTitle(title) {
        try {
            var result = await knex('articles').select(['title']).from('articles').where({title: title});
            result.length > 0 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async new(title, body) {
        try {
            await knex('articles').insert({ title, body, slug: slugify(title) });
            
            return { status: true }
        } catch (error) {
            return { status: false, error: error };
        }
    }
}

module.exports = new Article();