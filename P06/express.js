const express = require('express');
const bodyParser = require('body-parser')
const Joi = require('@hapi/joi')
const app = express();

// req = request
// res = response

const posts = [
    {id: 1, name:'First post'},
    {id: 2, name:'Second post'},
    {id: 3, name:'Third post'}
];

app.use(bodyParser.urlencoded({extended: true}));

app.get('/posts', (req, res) => {
    res.send(posts)
});

app.get('/post/:postID', (req, res) => {
    const post = posts.find( p => p.id === parseInt(req.params.postID));
    if(!post) {
        res.status(404).send('Post was not found');
    }
    res.send(post);
});

app.get('/post/:year/:month', (req, res) => {
    res.send(req.query);
});

app.post('/', function(req, res) {
    console.log('Got a post request');
    res.send('Post req received');
});

app.put('/posts/:id', function(req, res) {
    console.log('Got a put request');
    res.send('Put req received');
});

app.delete('/', function(req, res) {
    console.log('Got a delete request');
    res.send('Delete req received');
});

app.get('/', function(req, res)
{
    // Load the HTML file
    res.sendFile(__dirname + '/index.html');
})

// The send request
app.post('/send', function(req, res) {
    console.log(req.body);
    res.send(req.body);
});

// The following line of code will allow me to load the files that are in the directory stated
// app.use(express.static('../P06'));

app.listen(3000, function() {
    console.log('Listening on port 3000');
});