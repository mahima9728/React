import { useState } from "react"

function MyComponent() {
  const [name, setName] = useState('Guest');
  const [age, setAge] = useState(18);
  const [isEmployed, setIsEmployed] = useState(false);

  function updateName() {
    setName('Jen')
  }
  function updateAge() {
    setAge(age+5)
  }
  function updateStatus() {
    setIsEmployed(!isEmployed);
  }

  return (<>
    <p>Name: {name}</p>
    <button onClick={updateName}>Set Name!</button>
    <p>Age: {age}</p>
    <button onClick={updateAge}>Set Age!</button>
    <p>Is Employed: {isEmployed ? 'Yes':'No'}</p>
    <button onClick={updateStatus}>Toggle Status!</button>
  </>)
  
}

export default MyComponent