//import liraries
import React from 'react';

function Item({name, isPacked}) {
    if(isPacked) {
        return <li> {name} learning React {isPacked} ✅ </li>
    }
    return <li> {name} nothing to learn </li>
}
// create a component
function Conditional() {
    return (
       <ul>
        <Item name="rakesh" isPacked={true}/>
        <Item name="raju" isPacked={true}/>
        <Item name="varshil" isPacked={false}/>
       </ul>
    );
};



//make this component available to the app
export default Conditional;
