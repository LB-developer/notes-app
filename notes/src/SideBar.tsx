import { Note } from '../models/notes'

interface Props {
  notes: Note[]
  handleAddNote: () => void
  handleDeleteNote: (id: number) => void
  activeNote: Note | boolean
  setActiveNote: (currActiveNote: Note) => void
}

export default function SideBar({
  notes,
  handleAddNote,
  handleDeleteNote,
  activeNote,
  setActiveNote,
}: Props) {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-header">
          <h1>Notes</h1>
          <button onClick={handleAddNote}>Add</button>
        </div>
      </div>
      <div className="sidebar-notes">
        {notes.length > 0 &&
          notes.map((note) => (
            <div
              key={note.id}
              onClick={() => setActiveNote(note)}
              className="sidebar-note"
            >
              <div
                className={`sidebar-note-title ${
                  typeof activeNote !== 'boolean' &&
                  activeNote.id === note.id &&
                  'active-note'
                }`}
              >
                <strong>{note.title}</strong>
                <button onClick={() => handleDeleteNote(note.id)}>DEL</button>
                <p>{note.body}</p>

                <small className="note-meta-data">
                  {new Date(note.lastModified).toLocaleDateString('en-AU', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </small>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}
