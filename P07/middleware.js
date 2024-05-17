const express = require( 'express' ); 
const app = express(); 

const helmet = require( 'helmet' ); 
const morgan = require( 'morgan' ); 
const timeout = require( 'connect-timeout' ); 

// Pug is a template engine
app.set('view engine', 'pug');

app.use(helmet()); 
app.use(morgan( 'tiny' )); 
app.use(timeout( '5s' )); 

// An empty endpoint to try things out. This won t respond! 
app.get( '/' , (req, res) => {
    res.render('index', {theTitle: 'COMP6006 app', theMessage: 'Hello'});
}); 

app.listen(3000, () => {console.log("Listening on 3000.")});

// Connection string
//mongodb+srv://justinpan688:panmcbro2048@cluster0.iwb9lzo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// CONTINUE ON SLIDE 33
