//import liraries
import React from 'react';
import { useState } from 'react';

// create a component
function UseStateExample() {
   const  [count, setCount] = useState(0);
    function handleClick() {
        setCount(count+1)

    }
    return (
        <>
         <h2>count value is {count} </h2>
         <button onClick={handleClick}>Incerment</button>
        </>
    );
};

//make this component available to the app
export default UseStateExample;
