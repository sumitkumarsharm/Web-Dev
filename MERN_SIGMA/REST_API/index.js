const { log } = require('console');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;


app.use(express.json()); // Middleware to parse JSON data 
app.use(express.urlencoded({ extended: true })); // Middleware to parse JSON and URL-encoded data
app.use(methodOverride('_method')); // Middleware to support HTTP verbs such as PUT or DELETE in places where the client doesn't support it

// Set up view engine and static files or ejs templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // for EJS templates views directory
app.use(express.static(path.join(__dirname, 'public'))); // for static files in public directory

// constant array for storing Quotes
let posts = [
    {
        id: uuidv4(), // Generate a unique ID for the post
        text: "This is the first post.",
        author: "John Doe"
    },
    {
        id: uuidv4(), // Generate a unique ID for the post
        text: "This is the second post.",
        author: "Jane Doe"
    },
    {
        id: uuidv4(), // Generate a unique ID for the post  
        text: "This is the third post.",
        author: "John Doe"
    }
];



app.get('/posts', (req, res) => {
    res.render("index.ejs", { posts: posts });
});

app.get('/posts/new', (req, res) => {
    res.render("new.ejs");
});

app.post('/posts', (req, res) => {
    const newPost = {
        id: uuidv4(), // Generate a unique ID for the post
        text: req.body.text,
        author: req.body.author
    };

    posts.push(newPost);
    res.redirect('/posts');
});

// get by id
app.get('/posts/:id', (req, res) => {
    const postId = req.params.id
    const post = posts.find(p => p.id === postId);

    if (post) {
        res.render("show.ejs", { post: post });
    } else {
        res.status(404).send('Post not found');
    }
});


// update by id
app.patch('/posts/:id', (req, res) => {
    const postId = req.params.id
    const newContent = req.body.text;
    const post = posts.find(p => p.id === postId);

    if (post) {
        post.text = newContent;
        res.redirect(`/posts/${postId}`);
    } else {
        res.status(404).send('Post not found');
    }
});


app.get('/posts/:id/edit', (req, res) => {
    const postId = req.params.id;
    const post = posts.find(p => p.id === postId);
    if (post) {
        res.render("edit.ejs", { post: post });
    } else {
        res.status(404).send('Post not found');
    }
});

// delete by id
app.delete('/posts/:id', (req, res) => {
    const postId = req.params.id;
    const postIndex = posts.findIndex(p => p.id === postId);

    if (postIndex !== -1) {
        posts.splice(postIndex, 1);
        res.redirect('/posts');
    } else {
        res.status(404).send('Post not found');
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
