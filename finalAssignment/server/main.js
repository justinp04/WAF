const express = require('express');
const cors = require('cors');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(cors());

// Read in the JSON file data
const data = require('./items.json');

// Get all the menu items
app.get('/getItems', (req, res) => {
    res.send(data);
});

app.get('/getImage/:searchQuery', (req, res) => {

});

app.post('/placeOrder', (req, res) => {
    
});

app.listen(3000, () => console.log('Listening on port 3000'));