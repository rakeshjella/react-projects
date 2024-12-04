import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
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
      <h1>Vite + React</h1>
      <h3> count is  {count}</h3>
      <div className="card">
        
        <button onClick={IncrementCounter}>
         Increment
        </button>
        <button onClick={DecrementCounter}>
          Decrement
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
