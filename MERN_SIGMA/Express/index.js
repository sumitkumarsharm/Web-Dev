const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();


// path 
app.get('/', (req, res) => {
    res.send(`<div style="background-color: black; width: 100%; height: 100vh; display: flex;
  flex-direction: column; align-items: center; justify-content: center;">
  <h1 style="color: white;">Welcome to My Express App</h1>
  <p style="color: white;">This is the home page.</p>
</div>
`);
})


app.get('/about', (req, res) => {
    res.send(`<div style="background-color: black; width: 100%; height: 100vh; display: flex;
  flex-direction: column; align-items: center; justify-content: center;">
  <h1 style="color: white;">Welcome to My Express App</h1>
  <p style="color: white;">This is the About page.</p>
</div>
`);
});

app.get('/contact', (req, res) => {
   res.send(`<div style="background-color: black; width: 100%; height: 100vh; display: flex;
  flex-direction: column; align-items: center; justify-content: center;">
  <h1 style="color: white;">Welcome to My Express App</h1>
  <p style="color: white;">This is the Contact page.</p>
</div>
`);
});



// app.post('/submit',(req,res)=>{
//     res.send(`<div style="background-color: black; width: 100%; height: 100vh; display: flex;
//   flex-direction: column; align-items: center; justify-content: center;">
//   <h1 style="color: white;">Welcome to My Express App</h1>
//   <p style="color: white;">Form submitted successfully!</p>`)
// })

// Path with parameter
app.get('/user/:username',(req,res)=>{
    const {username} = req.params;
    console.log(username);
    
    res.send(`<div style="background-color: black; width: 100%; height: 100vh; display: flex;
  flex-direction: column; align-items: center; justify-content: center;">
  <h1 style="color: white;">Welcome to My Express App</h1>
  <p style="color: white;">Hello, ${username}!</p>`)
})


// querry string
app.get('/search',(req,res)=>{
    console.log(req.query);
    const {q} = req.query;
    res.send(`<div style="background-color: black; width: 100%; height: 100vh; display: flex;
  flex-direction: column; align-items: center; justify-content: center;">
  <h1 style="color: white;">Welcome to My Express App</h1>
  <p style="color: white;">You searched for: ${q}</p>
  </div>`)
})


// hame isko last me rakhna hota hai kyu ki ye koi bhi route accept karta hai
app.use((req, res) => {
    res.send(`<div style="background-color: black; width: 100%; height: 100vh; display: flex;
  flex-direction: column; align-items: center; justify-content: center;">
  <h1 style="color: white;">Welcome to My Express App</h1>
  <p style="color: white;">This path does not exist.</p>
</div>
`);
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
})