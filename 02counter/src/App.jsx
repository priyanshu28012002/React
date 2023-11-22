import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
 // let counter  = 0
  const addValue = ()=>{
    if(counter!=20){
      counter = counter + 1;
    setCounter(counter)
    console.log("value added",counter);
    }
    else{
      console.log("nahi jaumge");
    }
  }
  const removeValue = ()=>{
    
    if(counter!=0){
      counter = counter - 1;
    setCounter(counter)
    console.log("value added",counter);
    }
    else{
      console.log("nahi jaumge");
    }
  }
  return (
    <>
      
      <h1>Code + React</h1>
      <h2>Counter Value {counter}</h2>
      <button  onClick ={addValue}>ADD Value {counter}</button>
     
      <br />
      <br />
      <button  onClick ={removeValue}>Remove Value {counter}</button>

      <p>The counter value is: {counter}</p>
      
     
    </>
  )
}

export default App
