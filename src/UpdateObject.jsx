import React, { useState } from 'react'

const UpdateObject = () => {

  const [car, setCar] = useState({
    year: 2024,
    maker: 'Ford',
    model: 'Mustang',
  });
  
  function handleYearChange(event) {
    setCar((prevCar)=> ({...prevCar, year: event.target.value}))
  }
  function handleMakeChange(event) {
setCar((prevCar)=> ({...prevCar, maker: event.target.value}))  }
  function handleModelChange(event) {
setCar((prevCar)=> ({...prevCar, model: event.target.value}))  }
  return (
    <div>
      <p>Your Favorite Car is: {car.year} {car.maker} {car.model}</p>
      
      <input type='number' value={car.year} onChange={handleYearChange}></input>
      <br/>

      <input type='text' value={car.maker} onChange={handleMakeChange}></input>
      <br/>

      <input type='text' value={car.model} onChange={handleModelChange}></input>
      
    </div>
  )
}

export default UpdateObject
