import React from 'react'

function List(props) {
   
  const itemList = props.items;
  const category = props.category;

  const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories }</b></li>)

  return (
    <>
      <h3 className='list-category'>{category}</h3>
      <ul className='list-items'>{listItems }</ul>
   </>
  )
}

export default List


// import List from "./List";

// const App = () => {
//   const fruits = [{ id: 1, name: 'apple', calories: 45 },
//                 { id: 2, name: 'orange', calories: 55 }, 
//                 {id:3, name:'banana' , calories: 65}, 
//                 { id: 4, name: 'pineapple', calories: 75 }];
//   const vegetables = [{ id: 5, name: 'potatoes', calories: 54 },
//                 { id: 6, name: 'carrots', calories: 77 }, 
//                 {id:7, name:'broccoli' , calories: 93}, 
//                 { id: 8, name: 'corn', calories: 95 }];
//   return (
//     <>
//       <List items={fruits} category = "Fruits"></List>
//       <List items={vegetables} category = "vegetables"></List>

//   </>
      
//   ); 
// }

// export default App
