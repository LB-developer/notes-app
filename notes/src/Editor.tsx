import { Note } from "../models/notes"

interface Props {
  activeNote: Note | boolean
}

export default function Editor({activeNote}: Props) {
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
