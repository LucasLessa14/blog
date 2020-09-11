const User = require('../models/User');

class UserController {
    async index(req, res) {
        const users = await User.findAll();
        return res.json(users);
    }

    async create(req, res) {
        var { email, username, password } = req.body;

        if (email == undefined || email == '' || email == ' ') {
            res.status(400).json({error: 'email inválido'});
            return;
        }

        const emailExists = await User.findEmail(email);

        if (emailExists) {
            res.status(406).json({err: 'O email já cadastrado'});
            return;
        }

        await User.new(email, password, username);
        res.status(201).send("Usuário criado com sucesso");
    }

    async edit(req, res) {
        var { id, email, name, role } = req.body;
        var result = await User.update(id, email, name, role);

        if (result != undefined) {
            if (result.status) {
                res.status(200);
                res.send('Tudo OK!');
            } else {
                res.status(406);
                res.json(result.err);
            }
        } else {
            res.status(406);
            res.json('Ocorreu um erro no servidor');
        }
    }

    async remove(req,res) {
        var id = req.params.id;

        var result = await User.delete(id);

        if (result.status) {
            res.status(200);
            res.send('Tudo OK!');
        } else {
            res.status(406);
            res.json(result.err);
        }
    }
}

module.exports = new UserController();