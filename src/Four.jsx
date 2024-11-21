
import React, { useContext } from "react";
import { UserContext } from "./App";

function Four() {

  const user = useContext(UserContext);
  
  return (<div className="box">
    <h1>Hello from Four</h1>
    <p>Name: {user.name}</p>
    <p>Age: {user.age}</p>
    <p>isEmployed: {user.isEmployed ? 'Yes' : 'No'}</p>
    <p></p>
  </div>);
}

export default Four