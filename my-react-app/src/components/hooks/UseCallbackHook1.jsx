//import liraries
import  { useCallback, useState } from 'react';
import List from './List.jsx';

function UseCallbackHook1() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(true);

    const themeStyle = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }

    const getItems = useCallback((inc) => {
        return [number+inc, number+1+inc]
    },[number])

    return (
        <div style={themeStyle}>
            Number is {number}
            <input type='number' value={number}
            onChange={(e) => {setNumber(e.target.value)}}/>
            <button onClick={() => setDark(prevDark => !prevDark)}>click button</button>
            <List getItems={getItems}/>
        </div>
    )

}
export default UseCallbackHook1;
