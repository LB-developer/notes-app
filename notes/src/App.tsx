import { useState } from 'react'
import './App.css'
import SideBar from './SideBar'
import { Note } from '../models/notes'
import Editor from './Editor'

function App() {
  const [notes, setNotes] = useState<Note[]>([])
  const [noteId, setNoteId] = useState<number>(1)
  const [activeNote, setActiveNote] = useState<Note | boolean>(false)

  const handleAddNote = () => {
    const newNote: Note = {
      id: noteId,
      title: 'Untitled',
      body: '',
      lastModified: Date.now(),
    }

    setNotes([...notes, newNote])
    setNoteId(noteId + 1)
  }

  const handleDeleteNote = (idToDelete: number) => {
    const delIndex: number = notes.findIndex((note) => note.id === idToDelete)
    notes.splice(delIndex, 1)
    setNotes([...notes])
  }

  return (
    <div className="App">
      <SideBar
        notes={notes}
        handleAddNote={handleAddNote}
        handleDeleteNote={handleDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Editor activeNote={activeNote} />
    </div>
  )
}

export default App
