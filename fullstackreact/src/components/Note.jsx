const Notes = ({ note, toggle }) => {

const label = note.important ? 'note not impi' : 'note impi'


  return  <li key={note.id}>{note.content}
  
  <button onClick={toggle} >{label}</button>
  </li>;
};

export default Notes;
