import axios from 'axios'
import { useEffect, useState} from 'react'


const App = ()=> {

const [value, setvalue] = useState([])

const [name, setname] = useState('UREY')
const [number, setnumber] = useState('12345')

useEffect(()=>{
axios
.get('http://localhost:3001/persons')
.then(res=>{
  setvalue(res.data)
})


},[])

const handleChange = (event)=> {

setname(event.target.value)

}
const handleChangeNumber = (event)=> {

  setnumber(event.target.value)
  
  }

const arr = [];
const nameArr = () => (value.map((obj)=>(arr.push(obj.name))))
nameArr();

console.log(arr)

const addName = (event)=>{
 event.preventDefault()
 
 if(arr.includes(name) || number === '' ){
alert(`Name ${name} already exists`)

 }
else{
  const addobj = {
    name : name,
    number: number
 }
console.log(`name : ${addobj.name} & Number : ${addobj.number} showed to the web`  );
axios
.post('http://localhost:3001/persons', addobj)
.then(response => {
  setvalue(value.concat(addobj))

setname('') 
setnumber('')
})



}
 
 

}


return (
<div>
<h1>PhoneBook</h1>

<form onSubmit={addName}>

<label htmlFor="name">Name: </label> <input  id= "name"  value={name} onChange = {handleChange} type="text" />
<br />
<label htmlFor="number">Number:</label> <input id = "number" value={number} onChange={handleChangeNumber} type="text" />
<br />
<button type='submit'>Add</button>
</form>
<h1>Numbers</h1>
 {value.map((name)=>(
    <p>
      {name.name}  {name.number}
    </p>


))}

</div>

)

}

export default App;