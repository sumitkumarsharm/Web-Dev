const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const noteModel = require('./models/node.model');

dotenv.config();
const app = express(); 
app.use(cors({ 
    origin: 'http://localhost:5173', //yaha hame btana padta hai akah se data de rhe hai
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true }
)) // cors error par or kaam krna hai
app.use(express.json()); 


// posting notes to mongodb
app.post('/notes', async (req, res) => {
        const {title,content} = req.body;      
      await noteModel.create({title,content})
        res.status(201).json({ message: 'Note created successfully' });
});


// fetching notes from mongooes 
app.get('/notes', async (req, res) => {
    try {   
        const notes = await noteModel.find({}).sort({ createdAt: -1 });
        if(!notes || notes.length === 0) {
            return res.status(404).json({ message: 'Notes is Empty!' });
        }else{
              res.status(200).json({
            message: 'Notes get successfully'
            , notes: notes
        });
        } 
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch notes' });
    }
});

// get only one note from db
app.get('/notes/:id', async (req, res) => {
    const { id } = req.params;
    const note = await noteModel.findById(id);
    if (!note) {    
        return res.status(404).json({ message: 'Note not found' });
    }else{
        res.status(200).json({ message: 'Single Note get successfully', note });
    }
});


// update the notes form db
app.patch('/notes/:id', async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const note = await noteModel.findByIdAndUpdate(id, { title, content }, { new: true });
    if (!note) {    
        return res.status(404).json({ message: 'Note not found' });
    }else{
        res.status(200).json({ message: 'Note updated successfully', note });
    }
});

// delete the notes from mongooes
app.delete('/notes/:id', async (req, res) => {
    const { id } = req.params;
    const note = await noteModel.findByIdAndDelete(id)
    if (!note) {    
        return res.status(404).json({ message: 'Note not found' });
    }else{
        res.status(200).json({ message: 'Note delete successfully', note });
    }
});


module.exports = app;