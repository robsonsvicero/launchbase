const recipes = require('../data.json')

exports.index = function(req, res){
    res.render('./user/index', {recipes: recipes.recipes})
}
exports.about = function(req, res){
    res.render('./user/about')
}
exports.recipes = function(req, res){
    res.render('./user/recipes', {recipes: recipes.recipes})
}

exports.recipe = function(req, res) {
    const id = req.params.id;
    res.render('./user/recipe', {recipe: recipes.recipes[id]})
}