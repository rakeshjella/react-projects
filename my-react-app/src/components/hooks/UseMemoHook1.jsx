//import liraries
import React, {useState,useMemo, useCallback} from 'react';

// React.memo is used to memoize a functional component. It prevents unnecessary re-renders by skipping rendering 
// if the component's props haven't changed.
// The Child component will only re-render if the name prop changes.
// Clicking the button re-renders the Parent but skips re-rendering the Child

const Child = React.memo(({name, onClick }) => {
    console.log('calling child');
    return <>
    <h1>hello {name}</h1>
    <button onClick={onClick}>Click Me</button>
    </>
})

// create a component
function UseMemoHook1() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(true);

    

    // commenting this lline, inorder to memoize the calculation
    // and to stop calling or rendering the component on toggle theme
    // const doubleNumber = setToDouble(number);

    // now this only call when number changes, not on toggle click

    // useMemo memoizes the result of a computation and returns it. It recalculates the value only when its dependencies change.
    const doubleNumber = useMemo(() => {
        return setToDouble(number)
    },[number]);

    const themeStyle = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }
    
    // Memoized callback
    const handleClick = useCallback(() => {
        console.log("Button clicked!");
    }, []); // No dependencies, so the function is stable
    
    function setToDouble(num) {
        console.log('double and slowing the calculation');
        for(let i=0;i<100000000;i++) {}
        return num*2;
    }
    return (
        <>
        <Child name="Rakesh" onClick={handleClick}/>
        <h1>Use  memo</h1>
        <div style={themeStyle}>{doubleNumber}</div>
        <input type='number' value={number}  
            onChange={(e) => {setNumber(parseInt(e.target.value))}}/>
        <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
        </>
    );
}



//make this component available to the app
export default UseMemoHook1;
