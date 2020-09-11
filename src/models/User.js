const knex = require('../database');
const bcrypt = require('bcrypt');

class User {
    async findAll() {
        try {
            var results = await knex('users').select(['id', 'username', 'email'])
            return { status: true, results: results };
        } catch (error) {
            console.log(error);
            return { status: false, results: [] };
        }
    }

    async findById(id) {
        try {
            var result = await knex('users').select(['id', 'email', 'username']).where({ id });

            // Garante que a função retorna um único valor
            if (result.length > 0) {
                return result[0]
            }else {
                return undefined;
            } 
        } catch (error) {
            console.log(error);
            return undefined;
        }
    }

    async findEmail (email) {
        try {
            var result = await knex.select().from('users').where({ email });
            
            if (result.length > 0) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    async new(email, password, username) {
        try {
            var hash = await bcrypt.hash(password,8);

            await knex('users').insert({ email, password: hash, username });
            
            return { status: true }
        } catch (error) {
            return { status: false, error };
        }
    }

    async update (id, email, name, role) {

        var user = await this.findById(id);

        if(user != undefined) {

            var editUser = {};

            if (email != undefined) {
                if (email != user.email) {
                    var result = await this.findEmail(email);

                    if (!result) {
                        editUser.email = email;
                    } else {
                        return {status: false, err: 'O email já está cadastrado'}
                    }
                }
            }

            if (name != undefined)
                editUser.name = name;

            if (role != undefined)
                editUser.role = role;

            try {
                await knex.update(editUser).where({ id: id }).table('users');
                return {status: true};
            } catch (err) {
                console.log(err);
                return false;
            }

        } else {
            return { status: false, err: 'Usuário não existe' }
        }
    }

    async delete(id) {
        
        var user = await this.findById(id);

        if(user != undefined) {

            try {
                await knex.delete().where({ id: id }).table('users');
                return { status: true };
            } catch (err) {
                console.log(err);
                return { status: false, err: err };
            }
        } else {
            return { status: false, err: 'Usuário não existe, portanto não foi deletado' };
        }
    }
}

module.exports = new User();