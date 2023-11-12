import axios from 'axios'
import { useEffect, useState} from 'react'
import personsService from './services/persons'


const App = ()=> {

const [value, setvalue] = useState([])

const [name, setname] = useState('UREY')
const [number, setnumber] = useState('12345')
const [message, setMessage] = useState(null)

useEffect(()=>{
personsService
.getAll()
.then(res=>{
  setvalue(res.data)
})


},[])
console.log(value)

const handleChange = (event)=> {

setname(event.target.value)

}
const handleChangeNumber = (event)=> {

  setnumber(event.target.value)
  
  }

const arr = [];
const nameArr = () => (value.map((obj)=>(arr.push(obj.name))))
nameArr();

const addName = (event)=>{
 event.preventDefault()
 
 if(arr.includes(name) || number === '' ){
alert(`Name ${name} already exists`)

 }
else{
  const addobj = {
    name : name,
    number: number,
    id: value.length + 1
 }

 setErrorMessage(`Name ${addobj.name} Added` )




console.log(`name : ${addobj.name} & Number : ${addobj.number} showed to the web`  );
personsService
.create(addobj)
.then(response => {
  setvalue(value.concat(addobj))

setname('') 
setnumber('')


})



}
 
 

}


const deleteNumber = (id) => {
 const baseUrl = `http://localhost:3001/persons/${id}`
axios
.delete(baseUrl)
.then(() => {
  setvalue(value.filter(person => person.id !== id));
})
.catch(error => {
  console.error('Error deleting person:', error);
});


console.log(id);

}


const Notification = ({message}) => {

useEffect(  ()=>{

const timer = setTimeout(() => {
  setMessage(null)
}, 5000);

  return () => {
clearTimeout(timer)

  };

},[message]);



  if (message===null) {
    
    return null

  }

  return (
<div className='message'>

{message}

</div>

  )


}



return (
<div>
<h1>PhoneBook</h1>

<Notification message={message}/>
<form onSubmit={addName}>

<label htmlFor="name">Name: </label> <input  id= "name"  value={name} onChange = {handleChange} type="text" />
<br />
<label htmlFor="number">Number:</label> <input id = "number" value={number} onChange={handleChangeNumber} type="text" />
<br />
<button type='submit'>Add</button>
</form>
<h1>Numbers</h1>
{value.map((person) => (
  <p key={person.id}>
    {person.name} {person.number}
    {person.id}
    <button onClick={() => deleteNumber(person.id)}>Delete</button>
  </p>
))}

</div>

)

}

export default App;