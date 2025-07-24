// src/App.jsx
import { useEffect, useState } from 'react';
import api from './api/api';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ title: '', content: '' });

  // Get all notes
  const fetchNotes = async () => {
    const res = await api.get('/');
    setNotes(res.data.notes);
  };
  // createNote
  const createNote = async () => {
    if (!form.title || !form.content) {
      alert('Please fill in both title and content');
      return;
    }
    await api.post('/', form);
    setForm({ title: '', content: '' });
    fetchNotes();
  }

  // delete notes
  const deleteNote = async (id) => {
    await api.delete(`/${id}`);
    fetchNotes();
  };


  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Notes App</h1>

      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        placeholder="Content"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />
      <button onClick={createNote}>Add Note</button>

      <ul>
        {notes && notes.map((note) => (
          <li key={note._id}>
            <strong>{note.title}:</strong> {note.content}
            <button onClick={() => deleteNote(note._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;