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
          <button className={'add-note-button'} onClick={handleAddNote}>
            Add
          </button>
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
                  <div className="note-title-button">
                    <strong>{note.title}</strong>
                    <button
                      className={'delete-note-button'}
                      onClick={() => handleDeleteNote(note.id)}
                    >
                      Delete
                    </button>
                  </div>
                  <p>{note.body}</p>

                  <small className="note-meta-data">
                    {`Last modified ${new Date(
                      note.lastModified
                    ).toLocaleDateString('en-AU', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}`}
                  </small>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
