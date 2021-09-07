var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./app/config/mongodb.config.js');
const mongoose = require('mongoose');

const Customer = require('./app/models/ingredient.model.js');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log("Successfully connected to MongoDB.");
        const Ingredients = [
            { ingredientName: 'HA', status: 'Healthy',
                description: 'D1', alternate: 'A1',image:'I1'},
            { ingredientName: 'HB', status: 'Healthy',
                description: 'D2', alternate: 'A2',image:'I2'},
            { ingredientName: 'HC', status: 'Healthy',
                description: 'D3', alternate: 'A3',image:'I3'},
            { ingredientName: 'HD', status: 'Healthy',
                description: 'D4', alternate: 'A4',image:'I4'},
            { ingredientName: 'HE', status: 'Healthy',
                description: 'D5', alternate: 'A5',image:'I5'},
            { ingredientName: 'UA', status: 'Unhealthy',
                description: 'D6', alternate: 'A6',image:'I6'},
            { ingredientName: 'UB', status: 'Unhealthy',
                description: 'D7', alternate: 'A7',image:'I7'},
            { ingredientName: 'UC', status: 'Unhealthy',
                description: 'D8', alternate: 'A8',image:'I8'},
            { ingredientName: 'UD', status: 'Unhealthy',
                description: 'D9', alternate: 'A9',image:'I9'},
            { ingredientName: 'UE', status: 'Unhealthy',
                description: 'D10', alternate: 'A10',image:'I10'},
            { ingredientName: 'UkA', status: 'Unknown',
                description: 'D11', alternate: 'A11',image:'I11'},
            { ingredientName: 'UkB', status: 'Unknown',
                description: 'D12', alternate: 'A12',image:'I12'},

        ]

        for(let i=0; i<Ingredients.length; i++){

            const Ingredient = new Customer({
                ingredientName: Ingredients[i].ingredientName,
                status: Ingredients[i].status,
                description: Ingredients[i].description,
                alternate: Ingredients[i].alternate,
                image: Ingredients[i].image
            });

            // Save a Customer in the MongoDB
            await Ingredient.save();
        }
    }).catch(err => {
    console.log('Could not connect to MongoDB.');
    process.exit();
});

require('./app/routes/ingredient.router.js')(app);
// Create a Server
var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("App listening at http://%s:%s", host, port)
})
