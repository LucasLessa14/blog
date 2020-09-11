const Articles = require('../models/Articles');

class ArticleController {
    async index(req, res) {
        const articles = await Articles.findAll();
        return res.json(articles);
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
                res.json({info: 'Artigo criado'});
                return;
            } else {
                res.status(406).json({error: result.error});
                return;
            }
        }
    }
}

module.exports = new ArticleController();