import React from "react";

import "./NewCounter.css";

// don't change the Component name "App"
const NewCounter = () => {
  const [clickNumber, setClickNumber] = React.useState(0);

  let clickNumberHandler = () => {
    setClickNumber((prevCounter) => prevCounter + 1);
  };
  

  return (
    <div>
      <div>
        <p id="counter">{clickNumber}</p>
        <button onClick={clickNumberHandler}>Increment</button>
    
     
        <button onClick={()=> setClickNumber(0)}>reset</button>
        </div>
    </div>
  );
};

export default NewCounter;
