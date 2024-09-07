import { Note } from "../models/notes"

interface Props {
  activeNote: Note | boolean
  handleEditNote: (updatedNote: Note) => void
}

export default function Editor({ activeNote, handleEditNote }: Props) {
  const handleEditField = (key: string, value: string) => {
    if (typeof activeNote !== 'boolean')
      handleEditNote({
        ...activeNote,
        [key]: value,
        lastModified: Date.now(),
      })
  }

  if (typeof activeNote !== 'boolean')
    return (
      <div className="note-editor-container">
        <div className="note-editor-edit">
          <input
            className="title-edit"
            type="text"
            autoFocus
            placeholder="Enter note title..."
            value={activeNote.title}
            onChange={(e) => handleEditField('title', e.target.value)}
          />
          <textarea
            className="note-editor-preview"
            value={activeNote.body}
            placeholder="Write your note here..."
            onChange={(e) => handleEditField('body', e.target.value)}
            id="edit-field"
          ></textarea>
        </div>

        <div className="preview-container">
          <h1 style={{ marginBottom: '1rem' }}>{activeNote.title}</h1>
          <div className="note-preview">{activeNote.body}</div>
        </div>
      </div>
    )
  else
    return (
      <div className="note-editor-container">
        <div className="note-editor-edit">
          <h1>Select note to edit</h1>
        </div>
      </div>
    )
}
