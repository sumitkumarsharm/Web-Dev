const express = require('express');



const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json()) // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

app.get('/register', (req, res) => {
    const { username, email, password } = req.query;
    res.send(`<h1>Welcome to My Express App, Mr. ${username}! <br> Your email is ${email} and <br> your password is ${password}.</h1>`);
});


app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    res.send(`<h1>Welcome to My Express App, Mr. ${username}! <br> Your email is ${email} and <br> your password is ${password}.</h1>`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
