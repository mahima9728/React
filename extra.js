// import React from "react";
// import ReactDOM from 'react-dom/client';

// //React Element
// // component
// const Title = () => (<h1 className="head">This is React using JSX</h1>);

// //React Component
// //a- Class based Component - OLD
// //b- Functional Component - NEW (just a nomral javascript function)

// //React funtional component

// // const HeadingComponent = () => {
// //   return <h1>This is React funtional component</h1>
// // };

// //Component Composition
// const HeadingComponent2 = () => (
//   <div id="container">
//   <Title/>
//   <h1>This is React Functional Component</h1>
//   </div>

// );



// // React Component for app
// /**
//  * Header 
//  *  -logo
//  * -nav items (home, About us,)
//  * BODY
//  * -RESTAURANTcontainer
//  * --Image
//  * --NAme of res , star rating , cuisine, delivery time
//  * FOOTER
//  * -copyright
//  * -links
//  * -address
//  * -contact
//  */
// const root = ReactDOM.createRoot(document.getElementById('root'));


// root.render(<HeadingComponent2/>);

let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
let arrayIntegers4 = arrayIntegers.slice(-3, -1); //returns [3, 4]

// console.log(arrayIntegers1);
// console.log(arrayIntegers2);
// console.log(arrayIntegers3);
// console.log(arrayIntegers4);


// var num = 30;
// var num = 45;
// num =70
// console.log(num);

// let nums = 10;
// nums = 86;
// let nums = 20;
// // let nums = 30;
// console.log(nums);

(function iife() {
  var name = "IIFE";
  console.log(name);
  
}) ();
console.log(name);


