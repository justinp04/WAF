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

// Use a static file in repository, gotta load the repo first
app.use(express.static('public'));

// Pug is a template engine
app.set('view engine', 'pug');

app.use(helmet()); 
app.use(morgan( 'tiny' )); 
app.use(timeout( '20s' )); 

// An empty endpoint to try things out. This won t respond! 
app.get( '/' , async (req, res) => {
    // Use a .find handler to retrieve all ToDo items
    // Then, render the index view and pass the data of the data base query through the local param of render. The key is toDoList

    // Log to console
    let pList = await getToDos();

    console.log('The list is: ', pList);

    if(pList)
    {
        res.render('index', {toDoList: pList});
    }
    else
    {
        res.send('ToDo List is empty');
    }

    // res.render('index', {theTitle: 'COMP6006 app', theMessage: 'Hello'});
    // createPost();
    // res.send('Attempted to create post');
}); 

app.listen(3000, () => {console.log("Listening on 3000.")});

// Connection string

app.post('/send', function(req, res) {
    let body = req.body;
    if(req.body)
    {
        let password = decodeURIComponent(req.body.taskName);

        console.log('Attempted to connect');

        // password is meant to be: 3wLmUtEh1b6FQ7qr

        createToDo(req.body.taskName);

        res.redirect('/');
    }
    else
    {
        console.log("password invalid");
        res.redirect('/');
        res.send('Attempted to connect');
    }
});

app.get('/connect', async function(req, res) {
    console.log('connecting')
    await mongoose.connect('mongodb+srv://justinpan688:3wLmUtEh1b6FQ7qr@cluster0.iwb9lzo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
            .then(() => console.log('Connected to MongoDB'))
            .catch(err => console.error('Could not connect to MongoDB', err));

    console.log('redirecting');
    res.redirect('/');
});

// Schemas
const todoSchema = new mongoose.Schema({
    task: String,
    date: {type: Date, default: Date.now}
});

const ToDo = mongoose.model('todo', todoSchema);

async function createToDo(taskName) {
    const toDo = new ToDo({
        task: taskName,
    });
    const result = await toDo.save();
}

async function getToDos() {
    let returnValue = null;

    const toDoList = await ToDo
        .find({})
        .select({})
        .then((data) => {
            // console.log("Printing: ", data);
            returnValue = data;
        })
        .catch((err) => {
            console.error('Error: ', err);
        });
    
    return returnValue;
}