import React from "react";

function Food() {
  const food1 = 'Orange';
  const food2 = 'Banana';
  const food3 = 'Kiwi';

  return (
    <ul>
      <li>Apple</li>
      <li>{ food1}</li>
      <li>{ food2.toLocaleUpperCase()}</li>
      <li>{ food3.toLocaleLowerCase()}</li>
    </ul>
  );

}

export default Food;