const knex = require('../database');

class Category {
    async findAll() {
        try {
            var results = await knex('categories').select(['id', 'title', 'slug' ])
            return { status: true, results: results };
        } catch (error) {
            console.log(error);
            return { status: false, results: [] };
        }
    }

    async getArticles(slug) {
        try {
            var results = await 
            knex('articles_categories')
            .innerJoin('categories', 'categories.id','articles_categories.category_id')
            .where('categories.slug', slug)
            .innerJoin('articles', 'articles.id','articles_categories.article_id')
            .select(['articles.title', 'articles.slug' ])

            return { status: true, results };
        } catch (error) {
            console.log(error);
            return { status: false, results: [] };
        }
    }

    // async findById(id) {
    //     try {
    //         var result = await knex('articles').select().where({ id });

    //         // Garante que a função retorna um único valor
    //         if (result.length > 0) {
    //             return result[0]
    //         }else {
    //             return undefined;
    //         } 
    //     } catch (error) {
    //         console.log(error);
    //         return undefined;
    //     }
    // }

    // async findBySlug(slug) {
    //     try {
    //         var result = await knex('articles').select().where({ slug });

    //         // Garante que a função retorna um único valor
    //         if (result.length > 0) {
    //             return result[0]
    //         }else {
    //             return undefined;
    //         } 
    //     } catch (error) {
    //         console.log(error);
    //         return undefined;
    //     }
    // }

    // async findTitle(title) {
    //     try {
    //         var result = await knex('articles').select(['title']).from('articles').where({title: title});
            
    //         if (result.length > 0) {
    //             return true;
    //         } else {
    //             return false;
    //         } 
    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }
    // }

    // async new(title, body) {
    //     try {
    //         await knex('articles').insert({ title, body, slug: slugify(title) });
            
    //         return { status: true }
    //     } catch (error) {
    //         return { status: false, error: error };
    //     }
    // }

    // async update(id, title, body) {
    //     const article = await this.findById(id);

    //     if(article != undefined) {
    //         var editArticle = {};

    //         // Atualiza o título
    //         if (title != undefined) {

    //             if (title != article.title) {
    //                 var result = await this.findTitle(title);

    //                 if (!result) {
    //                     editArticle.title = title;
    //                     editArticle.slug = slugify(title);
    //                 } else {
    //                     return {status: false, error: 'Já existe um artigo com esse título'}
    //                 }
    //             }
    //         }
    
    //         // Atualiza a descrição
    //         if (body != undefined) editArticle.body = body;
            
    //         try {
    //             await knex('articles').update(editArticle).where({ id });
    //             return { status: true };
    //         } catch (error) {
    //             return { status: false, error: error };
    //         }
    //     } else {
    //         return { status: false, error: 'Artigo não existe, portanto não foi atualizado' }
    //     }
    // }

    // async delete(id) {
    //     var article = await this.findById(id);

    //     if(article != undefined) {

    //         try {
    //             await knex('articles').delete().where({ id });
    //             return { status: true };
    //         } catch (err) {
    //             console.log(err);
    //             return { status: false, err: 'Não foi possível deletar o artigo' };
    //         }
    //     } else {
    //         return { status: false, err: 'Artigo não existe, portanto não foi deletado' };
    //     }
    // }
}

module.exports = new Category();