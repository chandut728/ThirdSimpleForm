import './App.css'
import Heading from './Components/Heading';
import React, {useState} from 'react';


const handleClick = () => {
  alert('Submitted Successfully !!!!');
}

function App(){
  const [ firstName , setFirstName ] = useState("");
  const [ lastName , setLastName ] = useState("");
  const [ email , setEmail ] = useState("");
  const [ password , setPassword ] = useState("");

return(

  <div className="form">

  <div>
  <Heading />
  </div>

  <form>

    <input className="i1"
      value = {firstName}
      onChange = {e => setFirstName(e.target.value)}
      placeholder = "First name"
      type = "text"
      name = "firstName"
      required
    />
    <br />
    <br />

    <input className="i2"
      value = {lastName}
      onChange = {(e) => setLastName(e.target.value)}
      placeholder = "Last name"
      type = "text"
      name = "lastName"
      required
    />
    <br />
    <br />

    <input className="i3"
      value = {email}
      onChange = {e  => setEmail(e.target.value)}
      placeholder = "Email Address"
      type = "email"
      name = "email"
      required
    />
    <br />
    <br />

    <input className="i4"
      value = {password}
      onChange = {e => setPassword(e.target.value)}
      placeholder = "Password"
      type = "password"
      name = "password"
      required
    />
    <br /><br /><br />


    <button
      className="b1"
      onClick = {handleClick}>
      SUBMIT
    </button>

  </form>
  </div>
)
}

export default App
