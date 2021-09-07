

module.exports = function(app) {

    var ingredients = require('../controllers/ingredient.controller');

    app.get('/api/ingredient/:id', ingredients.getIngredient);
    app.get('/api/ingredients', ingredients.ingredients);

}
