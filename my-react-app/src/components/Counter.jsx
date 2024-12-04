import { useState } from 'react'


function Counter() {
  const [count, setCount] = useState(0);

  function IncrementCounter() {
    return setCount(count+1)
  }
  function DecrementCounter() {
    if(count > 0) {
      return setCount(count-1)
    }
  }
  return (
    <>
      <h1>Counter component</h1>
      <h3> count is  {count}</h3>
      <div className="card">
        
        <button onClick={IncrementCounter}>
         Increment
        </button>
        <button onClick={DecrementCounter}>
          Decrement
        </button>
      </div>
    </>
  )
}

export default Counter
