const express = require('express');
const cors = require('cors');

const app = express();

// Body parser to read the body of the URL from post requests
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// Allow cors so the front-end can access the backend
app.use(cors());

// Mongoose to connect to MongoDB
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect( 'mongodb+srv://justinpan688:3wLmUtEh1b6FQ7qr@cluster0.iwb9lzo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' ) 
    .then(() => console.log( 'Connected to MongoDB' )) 
    .catch(err => console.error( 'Could not connect to MongoDB' , err));

// Create the schema for the tweet
const tweetSchema = new mongoose.Schema({
    content: String,
    date: {type: Date, default: Date.now}
});

// Create the collection
const Tweet = mongoose.model('tweet', tweetSchema);

// createTweet
async function createTweet(pContent) {
    const tweet = new Tweet({
        content: pContent
    });

    const result = await tweet.save();
    return result;
};

async function getTweets() {
    let tweetData = '';

    const tweets = await Tweet
        .find()
        .select()
        .then((data) => {
            // console.log(data);
            tweetData = data;
        });

    return tweetData;
};

// Get function to retrieve the tweets from MongoDB
app.get('/tweets', async (req, res) => {
    let tweets = await getTweets();

    res.send(tweets);
});

// Post function to push a new tweet to MongoDO
app.post('/post', (req, res) => {
    // res.send("tweet created successfuly");
    console.log('Making post: ', req.body);
    // res.send(req.body);

    console.log(req.body.tweetContent);

    res.send(createTweet(req.body.tweetContent));
});

// Delete a tweet
async function deleteTweet(id) {
    await Tweet.deleteOne({_id: id});
}

app.delete('/delete/:id', (req, res) => {
    deleteTweet(req.params.id);

    res.send('Deleted the post');
})

app.listen(3000, () => console.log('Listening on port 3000'));