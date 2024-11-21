import Two from "./Two";
import { createContext } from "react";

export const UserContext = createContext();

const One = () => {

  const  user = {
    name: 'Jen',
    age: 30,
    isEmployed : true,
  }

  return (
    <>
      <UserContext.Provider value={user}><Two></Two></UserContext.Provider>
    
    </>
      
  ); 
}

export default One
