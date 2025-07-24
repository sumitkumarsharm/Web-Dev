const app = require('./src/app');
const connectDB = require('./src/db/connectDB');

// // notes 
// const notes = []

// // Create a note
// app.post('/notes', (req, res) => {
//     if (!req.body || Object.keys(req.body).length === 0) {
//         return res.status(400).json({ message: 'Please enter some title and content!' });
//     }
//     const note = req.body
//     notes.push(note);
//     res.status(201).json({ message: 'Note created successfully', note });

// });

// // geting all notes data
// app.get('/notes',(req,res)=>{
//     if (notes.length === 0) {
//         return res.status(404).json({ message: 'No notes foun' });
//     }
//     res.status(200).json(
//      {   messages: 'Notes retrieved successfully',
//         notes: notes
//     }
//     )
// })

// // updating specific note
// app.patch('/notes/:index', (req, res) => {
    
//     const { index } = req.params;
//     const updatedNote = req.body;

//     if (index < 0 || index >= notes.length) {
//         return res.status(404).json({ message: 'Note not found' });
//     }

//     notes[index] = updatedNote;
//     res.status(200).json({ message: 'Note updated successfully', note: updatedNote });
// })



// // // Delete a note    
//     app.delete('/notes/:index', (req, res) => {
//     const { index } = req.params;
//     if (index < 0 || index >= notes.length) {
//         return res.status(404).json({ message: 'Note not found' });
//     }
//     notes.splice(index, 1);
//     res.status(200).json({ message: 'Note deleted successfully' });
//     })


connectDB()
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});