import { useEffect, useState } from 'react';
import api from './api/api';
import { MdDeleteOutline } from 'react-icons/md';
import { LuSunMoon } from "react-icons/lu";
import { IoMdMoon } from "react-icons/io";
import { toast } from 'react-toastify';




const App = () => {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ title: '', content: '' });
  const [darkMode, setDarkMode] = useState(true);

  const fetchNotes = async () => {
    const res = await api.get('/');
    setNotes(res.data.notes);
  };

  const createNote = async () => {
    if (!form.title || !form.content) {
      alert('Please fill in both title and content');
      return;
    }
    await api.post('/', form);
    setForm({ title: '', content: '' });
    fetchNotes();
    toast.success('Note added successfully!');
  };

  const deleteNote = async (id) => {
    await api.delete(`/${id}`);
    fetchNotes();
    toast.error('Note deleted successfully!');

  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const bgMain = darkMode ? 'bg-neutral-900 text-white' : 'bg-gray-100 text-black';
  const bgCard = darkMode ? 'bg-neutral-800 border-neutral-700' : 'bg-white border-gray-300';
  const inputBg = darkMode ? 'bg-neutral-700 text-white border-neutral-600' : 'bg-gray-100 text-black border-gray-300';
  const textMuted = darkMode ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className={`w-full min-h-screen ${bgMain} py-10 px-4 transition-all duration-300`}>
      <div className="max-w-3xl mx-auto space-y-10">





        <div className={`p-6 rounded-2xl shadow-lg border ${bgCard}`}>
          <div className="text-3xl font-bold text-center mb-6 flex  justify-center gap-5 relative">📝 Notes App
            <div className="flex justify-end absolute -top-3 right-1 ">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`mb-4 px-2 py-2 rounded-full ${bgCard} ${textMuted} hover:cursor-pointer shadow transition-all duration-300`}
              >
                {darkMode ? <LuSunMoon /> : <IoMdMoon />}
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className={`flex-1 px-4 py-2 rounded-lg ${inputBg} focus:ring-2 focus:ring-blue-500 outline-none`}
            />
            <input
              placeholder="Content"
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              className={`flex-1 px-4 py-2 rounded-lg ${inputBg} focus:ring-2 focus:ring-blue-500 outline-none`}
            />
            <button
              onClick={createNote}
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-lg text-white font-semibold"
            >
              Add Note
            </button>
          </div>
        </div>


        <div className={`p-6 rounded-2xl shadow-lg border ${bgCard}`}>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">🗂️ Your Notes</h2>

          {notes.length === 0 && (
            <p className={`italic text-center ${textMuted}`}>
              No notes available. Start by adding one above!
            </p>
          )}

          <ul className="space-y-4">
            {notes.map((note) => (
              <li
                key={note._id}
                className={`flex flex-col md:flex-row justify-between items-start md:items-center p-4 rounded-lg shadow border ${darkMode ? 'bg-gray-300 text-neutral-900' : 'bg-gray-100 text-black'}`}
              >
                <div>
                  <h3 className="font-bold text-lg mb-1">{note.title}</h3>
                  <p className="text-sm">{note.content}</p>
                </div>
                <button
                  title="Delete note"
                  onClick={() => deleteNote(note._id)}
                  className="text-red-600 hover:text-red-800 mt-2 md:mt-0 md:ml-4 cursor-pointer"
                >
                  <MdDeleteOutline size={24} />
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default App;
