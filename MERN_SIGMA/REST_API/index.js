const { log } = require('console');
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON data 
app.use(express.urlencoded({ extended: true })); // Middleware to parse JSON and URL-encoded data

// Set up view engine and static files or ejs templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // for EJS templates views directory
app.use(express.static(path.join(__dirname, 'public'))); // for static files in public directory

// constant array for storing Quotes
let posts = []



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

// gte by id 
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
app.get('/update/:id', (req, res) => {
    const postId = req.params.id
    const post = posts.find(p => p.id === postId);
    if (post) {
        res.render("edit.ejs", { post: post });
    } else {
        res.status(404).send('Post not found');
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
