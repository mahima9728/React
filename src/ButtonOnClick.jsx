function Button() {

  let count = 0;


  const handleClick = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} you clicked me  ${count} times`);     
      
    }
    else {
      console.log(`Stop clicking me ${name}`);
      
    }
 
}

  
  return (
    <>

      <button onClick={() => handleClick('Jen')}>Click me!</button>

    </>
  );
}

export default Button;
// function Button() {

//   const handleClick = () => {
//   console.log("Ouch!");
  
// }
//   const handleClick2 = (name) => {
//   console.log(`Stop Clicking me ${name}`);
  
// }

  
//   return (
//     <>

//       <button onClick={() => handleClick2('Harry')}>Click me!</button>

//     </>
//   );
// }

// export default Button;