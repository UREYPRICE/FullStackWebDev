import { useState} from 'react'


const App = ()=> {

const [value, setvalue] = useState([
{name: 'Ahmed Waqar'},
{name: 'UREY'}

])

const [name, setname] = useState('UREY')

const handleChange = (event)=> {

setname(event.target.value)

}

const arr = [];
const nameArr = () => (value.map((obj)=>(arr.push(obj.name))))
nameArr();

console.log(arr)

const addName = (event)=>{
 event.preventDefault()
 
 if(arr.includes(name)){
alert(`Name ${name} already exists`)

 }
else{
  const addobj = {
    name : name
 }


setvalue(value.concat(addobj))

setname('') 
}
 
 

}


return (
<div>
<h1>PhoneBook</h1>

<form onSubmit={addName}>

<label htmlFor="name">Name: </label> <input  id= "name"  value={name} onChange = {handleChange} type="text" />
<button type='submit'>Add</button>
</form>
<h1>Numbers</h1>
 {value.map((name)=>(
    <p>
      {name.name}  
    </p>


))}

</div>

)

}

export default App;alert(`Name `)