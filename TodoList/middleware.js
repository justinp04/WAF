const express = require( 'express' ); 
const app = express(); 

const helmet = require( 'helmet' ); 
const morgan = require( 'morgan' ); 
const timeout = require( 'connect-timeout' ); 

// What is mongoose?
// Mongoose is a tool that allows us to connect to mongoose a lot easier
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://justinpan688:3wLmUtEh1b6FQ7qr@cluster0.iwb9lzo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Schemas
const todoSchema = new mongoose.Schema({
    task: String,
    date: {type: Date, default: Date.now}
});

const ToDo = mongoose.model('todo', todoSchema);

// For us to read content from the body of a message
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

// Pug is a template engine
app.set('view engine', 'pug');

// Use a static file in repository, gotta load the repo first
app.use(express.static('public'));
app.use('/js', express.static(__dirname + '/public/js'));

app.use(helmet()); 
app.use(morgan( 'tiny' )); 
app.use(timeout( '20s' )); 

// An empty endpoint to try things out. This won t respond! 
app.get( '/' , async (req, res) => {
    let pList = await getToDos();

    console.log('The list is: ', pList);

    res.render('index', {toDoList: pList});

}); 

async function createToDo(taskName) {
    const toDo = new ToDo({
        task: taskName,
    });
    const result = await toDo.save();
}

// Add a post
app.post('/send', function(req, res) {
    createToDo(req.body.taskName);

    res.redirect('/');
});

app.delete( '/todos/:id' , function(req, res){
    deleteTodo(req.params.id);

    res.send('/');
});

function deleteTodo(id) {
    ToDo.deleteOne({ _id: id })
        .then(() => {
            console.log('Todo item deleted successfully');
        })
        .catch((error) => {
            console.error(error);
        });
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

app.listen(3000, () => {console.log("Listening on 3000.")});