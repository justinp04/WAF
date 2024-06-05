const postSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: String,
    tag: [String],
    date: {type: Date, default: Date.now}
});

// Create a model to represent an instance of what is stored in the SQL database
const Post = mongoose.model('Post', postSchema);

async function createPost() {
    const post = new Post({
        title: 'First Post',
        body: 'This is the body of our first post..',
        author: 'COMP6006',
        tag: ['demo', 'mongo']
    });
    const result = await post.save();
    // console.log(result);
}

async function getPosts() {
    const posts = await Post
        .find({tag: 'Second', author: 'COMP6006'})
        .select({title: 1, body: 1})
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.error("Error: ", err);
        });
}