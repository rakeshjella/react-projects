import { useDeferredValue, useEffect, useMemo, useState } from "react";

function List({input}) {
    const LIST_SIZE = 10000;
    const deffferInput = useDeferredValue(input)
    const list = useMemo(() => {
        const lData = []
        for(let i=0;i<LIST_SIZE; i++) {
            lData.push(<div key={i}>{input}</div>)
        }
        return lData
    },[deffferInput])

    useEffect(() => {
        console.log(`Input value: ${input} ---- DefferedInput: ${deffferInput}`)
    },[input, deffferInput])

    return list
}

export default function UseDefferedHook () {
    const [input, setInput] = useState('')
    function handleChange(e) {
        setInput(e.target.value)
    }
    return (
        <>
            <input type="text" value={input} onChange={handleChange}/>
            <List input={input}/>
        </>
    )
}