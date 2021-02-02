const express = require('express')
const routes = express.Router()
const recipes = require('./controllers/admin')
const user = require('./controllers/user')

//USER
// routes.get('/', user.index)
routes.get('/about', user.about)
routes.get('/recipes', user.recipes)
routes.get('/recipe', user.recipe)

//ADMIN
routes.get('/', function(req, res) {
  return res.redirect('/admin/recipes')
})

routes.get('/admin/recipes', recipes.index)         //Mostra a lista de receitas
routes.get('/admin/create', recipes.create)         //Mostra o formulário de nova receita
routes.get('/admin/recipes/:id', recipes.show)      //Exibe detalhes de uma receita
routes.get('/admin/edit/:id', recipes.edit)         //Mostra o formulário de edição de receitas

routes.post('/admin/recipes', recipes.post)         //Cadastra nova receita
routes.put('/admin/recipes', recipes.put)           //Edita uma receita
routes.delete('/admin/recipes', recipes.delete)     //Deleta uma receita

routes.use(function(req, res) {
  return res.status(404).render('./user/not_found')
})

module.exports = routes