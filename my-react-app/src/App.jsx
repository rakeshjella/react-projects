// import Counter from './components/counter';
// import Conditional from './components/Conditional';
import './App.css'
// import Ternary from './components/Ternary';
// import RenderList from './components/RenderList';
// import UseStateExample from './components/hooks/UseSateExample';
// import UseRefExample from './components/hooks/UseRefExample';
import UseEffectExample from './components/hooks/UseEffectExample';

function App() {
  return (
    <>
      <h1>Vite + React project</h1>
      <div className="card">
        {/* <Counter/>
        <h3>conditional example</h3>    
        <Conditional/>
        <h3>Ternary component</h3>
        <Ternary/> 

        <RenderList/>

        <UseStateExample/>
        <UseRefExample/>*/}
        <UseEffectExample/>
      </div>
    </>
  )
}

export default App
