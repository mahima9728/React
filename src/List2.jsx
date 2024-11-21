import React from 'react'

const List2 = () => {
  const fruits = [{ id:1, name: 'apple', calories: 45 }, {id:2,name: 'orange', calories: 55}, 
    {id:3, name:'banana' , calories: 65}, 
    { id: 4, name: 'pineapple', calories: 75 }];
  
  // fruits.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); Reverse aplphabet

  // fruits.sort((a, b) => a.calories-b.calories); //Numeric
  // fruits.sort((a, b) => b.calories-a.calories); //Numeric Reverse
  
  const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name} : <b>{fruit.calories}</b></li>)

  return (
    <div>
      <ul>{listItems }</ul>
      
    </div>
  )
}

export default List2
