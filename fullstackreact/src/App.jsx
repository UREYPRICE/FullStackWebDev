import axios from "axios";
import { useState, useEffect } from "react";
import Note from "./components/Note";
import noteService from './services/notes'

const App = (props) => {
  const [notes, setNotes] = useState([]);
  const [value, setValue] = useState ('HELLO THERE TYPE HERE!!!');
  const [show, setShow] = useState(false)
  
useEffect(()=>{
console.log('Effect coming Throuh!!!');

noteService
.getAll()
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
  
    }
    noteService
    .create(newObj)
    .then(response => {
      
      setNotes(notes.concat(response.data))
      setValue('')
    })

    
}

const handleChange = (event) => {
  setValue(event.target.value)


}


const toggles = (id) => {

  const url = `http://localhost:3001/notes/${id}`
const note = notes.find(n => n.id === id)
const changedNote = {...note, important : !note.important}

noteService
.update (id, changedNote)
.then(
response => {

  setNotes(notes.map(n=>n.id !== id ? n: response.data))
}

)



}

  
  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShow(!show)}>
          show {show ? 'important' : 'all' }
        </button>
      <ul>
        {notesToShow.map((note) => (
          <Note 
          
          key={note.id} 
          note={note} 
          toggle={()=>toggles(note.id)}
          
          
          />


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
