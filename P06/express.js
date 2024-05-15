const express = require('express');
const app = express();

app.get('/', function(req, res)
{
    res.send('Hello World!!',);
})

// req = request
// res = response

const posts = [
    {id: 1, name:'First post'},
    {id: 2, name:'Second post'},
    {id: 3, name:'Third post'}
];

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
    res.send(req.params)
});

app.listen(3000, function() {
    console.log('Listening on port 3000')
});