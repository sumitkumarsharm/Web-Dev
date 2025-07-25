const InstaData = require('./data.json')
const express = require('express');
const app = express();
app.use(express.json())
const path = require('path');
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('home', { title: 'Home Page' });
});

app.get('/about', (req, res) => {
  let num = Math.floor(Math.random() * 100) + 1;
  res.render('rolldice', { title: 'About Page', randomNumber: num });
});


// basic instagram searched page
app.get('/user/:username', (req, res) => {
  let { username } = req.params
  let userData = InstaData[username]
  console.log(`Fetching data for Instagram user: ${userData.name}`);
  res.render('instagram', { userData });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});