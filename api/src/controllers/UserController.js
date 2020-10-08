const User = require('../models/User');

class UserController {
    async validate(req, res) {
        res.send('ok!');
    }
    
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

        try {
            await User.new(email, password, username);
            res.status(201).send("Usuário criado com sucesso");
        } catch (err) {
            res.status(400).json({ err });
        }
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
            res.send('Tudo OK!');
        } else {
            res.status(406).json(result.err);
        }
    }

    async login (req, res) {
        var { email, password } = req.body;

        var result = await User.authenticate(email, password);

        if (result.status) {
            res.json({ token: result.token });
        } else {
            res.status(406).json({ status: false, err: result.err });
        }
    }

    // async changePassword(req, res) {
    //     var { token, password } = req.body;

    //     var isTokenValid = await PasswordToken.validate(token);
    
    //     if (isTokenValid.status) {

    //         await User.changePassword(password, isTokenValid.token.user_id, isTokenValid.token.token)
    //         res.send('Senha alterada com sucesso');
    //     } else {
    //         res.status(406).json({err: 'Token inválido!'});
    //     }
    // }

    // async recoverPassword(req,res) {
    //     var email = req.body.email;

    //     var result = await PasswordToken.create(email);

    //     if (result.status) {
    //         res.status(200);
    //         res.send("" + result.token);
    //     } else {
    //         res.status(406)
    //         res.send(result.err);
    //     }
    // }
}

module.exports = new UserController();