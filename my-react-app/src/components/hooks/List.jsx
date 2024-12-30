import { useEffect, useState } from "react";

function List({getItems}) {
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(getItems(1))
        console.log('updating items')
    },[getItems])

    return items.map(i => <div key={i}>{i}</div>)
}

export default List;