import React, { useState } from 'react'
import './App.css'
import SideBar from './SideBar'
import Main from './Editor'
import { Note } from '../models/notes'

function App() {
  const [notes, setNotes] = useState<Note[]>([])
  const [noteId, setNoteId] = useState<number>(1)

  const handleAddNote = () => {
    const newNote: Note = {
      id: noteId,
      title: 'testing',
      body: 'testing body',
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
      />
      <Main />
    </div>
  )
}

export default App
