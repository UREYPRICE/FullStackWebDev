import { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [value, setValue] = useState ('HELLO THERE TYPE HERE!!!');
  
const AddNote = (event) => {
  event.preventDefault()
  const newObj = {
    content : value,
    important: Math.random() > 0.5,
    id: notes.length + 1,
    }
    setNotes(notes.concat(newObj))
    setValue('')
}

const handleChange = (event) => {
  setValue(event.target.value)


}

  
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
<form onSubmit={AddNote}>
  <input value={value} onChange = {handleChange} type="text" />
  <button type="submit"> Submit </button>


</form>
      
    </div>
  );
};

export default App;
