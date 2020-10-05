const Articles = require('../models/Article');

class ArticleController {
    async index(req, res) {
        const articles = await Articles.findAll();
        return res.json(articles);
    }

    async getArticleById(req, res) {
        const id = req.params.id;
        const article = await Articles.findById(id);
        return res.json(article);
    }

    async getArticleBySlug(req, res) {
        const slug = req.params.slug;
        const article = await Articles.findBySlug(slug);
        return res.json(article);
    }

    async create(req, res) {
        const { title, body } = req.body;

        if (title == undefined || title == '' || title == ' ') {
            res.status(400).json({err: 'Título inválido'});
            return;
        }

        const nameExists = await Articles.findTitle(title);

        if (nameExists) {
            res.status(406).json({err: 'Esse título já foi cadastrado'});
            return;
        } else {
            var result = await Articles.new(title, body);

            if (result.status) {
                res.status(201).json({info: 'Artigo criado'});
                return;
            } else {
                res.status(406).json({error: result.error});
                return;
            }
        }
    }

    async edit(req, res) {
        const { id, title, body } = req.body;
        var result = await Articles.update(id, title, body);

        if (result.status) {
            res.send(result);
        } else {
            res.status(406).json({ error: result.error});
        }
    }

    async remove(req, res) {
        var id = req.params.id;

        var result = await Articles.delete(id);

        if (result.status) {
            res.send(result);
        } else {
            res.status(406).json(result.err);
        }
    }
}

module.exports = new ArticleController();