import React, { useState } from 'react';
import './FormHandling.css';

function FormHandling() {

  const [username, setUsername] = useState('');

  const submitHandler = () => {
    console.log('Submit');
    
   
     
  };

  return (
    <div>
      <form onSubmit={() => {
        submitHandler()
      }} className="form">
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter your text" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default FormHandling;
