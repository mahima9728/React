
import React, {useState , useRef , useEffect} from 'react'

function UseRef() {

  const ref = useRef(0);

  useEffect(() => {
    console.log("Component rendered!");
  });

  function handleClick() {
    ref.current = ref.current + 1;
  }
  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      
    </div>
  )
}

export default UseRef
