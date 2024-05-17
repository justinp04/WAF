const express = require( 'express' ); 
const app = express(); 

const helmet = require( 'helmet' ); 
const morgan = require( 'morgan' ); 
const timeout = require( 'connect-timeout' ); 

// What is mongoose?
// Mongoose is a tool that allows us to connect to mongoose a lot easier
const mongoose = require('mongoose');

// For us to read content from the body of a message
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

// Pug is a template engine
app.set('view engine', 'pug');

app.use(helmet()); 
app.use(morgan( 'tiny' )); 
app.use(timeout( '5s' )); 

// An empty endpoint to try things out. This won t respond! 
app.get( '/' , (req, res) => {
    // res.render('index', {theTitle: 'COMP6006 app', theMessage: 'Hello'});
    res.sendFile(__dirname + '/index.html');
}); 

app.listen(3000, () => {console.log("Listening on 3000.")});

// Connection string

app.post('/send', function(req, res) {
    let body = req.body;
    if(req.body)
    {
        let password = encodeURIComponent(req.body);

        console.log('Attempted to connect');

        mongoose.connect(`mongodb+srv://justinpan688:3wLmUtEh1b6FQ7qr@cluster0.iwb9lzo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
            .then(() => console.log('Connected to MongoDB'))
            .catch(err => console.error('Could not connect to MongoDB', err));

        res.send('Attempted to connect');
    }
    else
    {
        console.log("password invalid");
        res.redirect('/');
        res.send('Attempted to connect');
    }
});
