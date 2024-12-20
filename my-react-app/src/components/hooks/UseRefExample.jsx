//import liraries
import { useRef } from 'react';

// create a component
function UseRefExample() {
   const  countRef = useRef(0);
   const inputRef = useRef(null);
    function handleClick() {
        // This doesn't re-render the component!
        countRef.current = countRef.current + 1;
        inputRef.current.focus();

    }
    return (
        <>
         <h2>count value is : {countRef.current}</h2>
         <input type="text" ref={inputRef}></input>
         <button onClick={handleClick}>Incerment</button>
        </>
    );
};

//make this component available to the app
export default UseRefExample;
