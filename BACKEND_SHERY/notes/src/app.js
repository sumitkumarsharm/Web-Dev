const express = require('express');
const noteModel = require('./models/node.model');

const app = express(); 
app.use(express.json()); // Middleware to parse JSON bodies

app.post('/notes', async (req, res) => {
        const {title,content} = req.body;      
      await noteModel.create({title,content})
        res.status(201).json({ message: 'Note created successfully' });
});




module.exports = app;