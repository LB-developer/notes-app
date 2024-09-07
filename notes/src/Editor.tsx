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
      <>
        <div className="note-editor-edit">
          <input
            type="text"
            autoFocus
            value={activeNote.title}
            onChange={(e) => handleEditField('title', e.target.value)}
          />
          <textarea
            value={activeNote.body}
            onChange={(e) => handleEditField('body', e.target.value)}
            id="edit-field"
          ></textarea>
        </div>
        <div className="note-editor-preview"></div>
        <h1>{activeNote.title}</h1>
        <div className="note-preview">{activeNote.body}</div>
      </>
    )
  else
    return (
      <>
        <div className="note-editor-edit">
          <input type="text" autoFocus />
          <textarea id="edit-field"></textarea>
        </div>
        <div className="note-editor-preview"></div>
        <h1>TITLE</h1>
        <div>note preview</div>
      </>
    )
}
