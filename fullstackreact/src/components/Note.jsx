const Notes = ({ note }) => {
  return <li key={note.id}>{note.content}</li>;
};

export default Notes;
