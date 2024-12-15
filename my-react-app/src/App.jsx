import Counter from './components/counter';
import Conditional from './components/Conditional';
import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React project</h1>
      <div className="card">
        <Counter/>
        <h3>conditional example</h3>    
        <Conditional/>
      </div>
    </>
  )
}

export default App
