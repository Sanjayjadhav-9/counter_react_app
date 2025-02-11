import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function addValue(){
    if(count < 20){
      setCount(count + 1)
    }
  }

  function removeValue(){
    if(count > 0){
      setCount(count - 1)
    }
  }
  return (
    <>
      <h1>Counter | React</h1>
      <h3>Count value : {count}</h3>
      <div className="card">
        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue}>Add Value</button>
      </div>
    </>
  )
}

export default App
