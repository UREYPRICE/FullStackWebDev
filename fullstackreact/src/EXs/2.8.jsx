import { useState} from 'react'


const App = ()=> {

const [value, setvalue] = useState([
{name: 'Ahmed Waqar',
number : '03238837203'
},

{name: 'UREY',
number : '123456789'
}

])

const [name, setname] = useState('UREY')
const [number, setnumber] = useState('12345')

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


setvalue(value.concat(addobj))

setname('') 
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