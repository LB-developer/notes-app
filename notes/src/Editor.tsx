export default function Main() {
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
