import { useState } from 'react'


function Counter() {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    return setCount(count+1)
  }
  function decrementCounter() {
    if(count > 0) {
      return setCount(count-1)
    }
  }
  return (
    <>
      <h1>Counter component</h1>
      <h3> count is  {count}</h3>
      <div className="card">
        
        <button onClick={incrementCounter}>
         Increment
        </button>
        <button onClick={decrementCounter}>
          Decrement
        </button>
      </div>
    </>
  )
}

export default Counter
