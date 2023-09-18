import axios from "axios";
import { useState, useEffect } from "react";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setNotes] = useState([]);
  const [value, setValue] = useState ('HELLO THERE TYPE HERE!!!');
  const [show, setShow] = useState(true)
  
useEffect(()=>{
console.log('Effect coming Throuh!!!');

axios
.get('http://localhost:3001/notes')
.then(res=>{
console.log('Waqar Always fullfils promise!!');
setNotes(res.data)

})


},[])

console.log('render', notes.length, 'notes')


const notesToShow = show ? notes : notes.filter(notes => notes.important)



const AddNote = (event) => {
  event.preventDefault()
  const newObj = {
    content : value,
    important: Math.random() > 0.5,
    id: notes.length + 1,
    }
    axios
    .post('http://localhost:3001/notes', newObj)
    .then(response => {
      
      setNotes(notes.concat(response.data))
      setValue('')
    })

    
}

const handleChange = (event) => {
  setValue(event.target.value)


}

  
  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShow(!show)}>
          show {show ? 'important' : 'all' }
        </button>
      <ul>
        {notesToShow.map((note) => (
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
