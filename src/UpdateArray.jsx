import React from 'react';
import { useState } from 'react';

function MyComponent() {

  const [obj, setObj] = useState({ year: 2024 , model:'Mustang' , maker:'Ford' },
  )

  function handleYearChange(event) {
    setObj((o) => ({...o ,year: event.target.value}) )
  }
  function handleModelChange(event) {
    setObj((o) => ({...o ,model: event.target.value}) )
  }
  function handleMakerChange(event) {
    setObj((o) => ({...o ,maker: event.target.value}) )
  }
  
  return (<div>
    <p>Your favorite car is: {obj.year} {obj.model} {obj.maker}</p>
    <input value={obj.year} type='number' onChange={handleYearChange}></input><br/>
  
    <input value={obj.model} type='text' onChange={handleModelChange}></input><br></br>
  
    <input value={obj.maker} type='text' onChange={handleMakerChange}></input>
  </div>)
}

export default MyComponent