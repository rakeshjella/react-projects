//import liraries
import React from 'react';

function Item({ name, isPacked }) {
    return (
        <li>
            {isPacked ? (
                <del>
                    {name + ' ✅'}
                </del>
            ) : (
                name
            )}
        </li>
    )
}
// create a component
function Ternary() {
    return (
        <ul>
            <Item name="rakesh" isPacked={true} />
            <Item name="raju" isPacked={true} />
            <Item name="varshil" isPacked={false} />
        </ul>
    );
};

//make this component available to the app
export default Ternary;
