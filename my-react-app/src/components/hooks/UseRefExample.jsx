//import liraries
import React from 'react';
import { useRef } from 'react';

// create a component
function UseRefExample() {
   const  countRef = useRef(0);
    function handleClick() {
        // This doesn't re-render the component!
        countRef.current = countRef.current + 1;

    }
    return (
        <>
         <h2>count value is : {countRef.current}</h2>
         <button onClick={handleClick}>Incerment</button>
        </>
    );
};

//make this component available to the app
export default UseRefExample;
