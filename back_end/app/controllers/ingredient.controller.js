
const Ingredient = require('../models/ingredient.model');


// FETCH all Ingredients
exports.ingredients = (req, res) => {
    Ingredient.find().select('-__v').then(ingredientInfos => {
        res.status(200).json(ingredientInfos);
    }).catch(error => {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    });
};

// get a Ingredient by Id
exports.getIngredient = (req, res) => {
    Ingredient.findById(req.params.id).select('-__v')
        .then(ingredient => {
            res.status(200).json(ingredient);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Ingredient not found with id " + req.params.id,
                error: err
            });
        }
        return res.status(500).send({
            message: "Error retrieving Ingredient with id " + req.params.id,
            error: err
        });
    });
};




