import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <>
    <div className=" w-full h-screen duration-200" style={{backgroundColor:color}} >
    Hi I am good Boy 
   
    </div>
    <div > 
    <button onClick={() => setcolor("green")}>
     Green
    </button>
    <button onClick={() => setcolor("red")}>
     Red
    </button>
    <button onClick={() => setcolor("blue")}>
     Blue
    </button>
    <button onClick={() => setcolor("pink")}>
     Pink
    </button>


    </div>
    
    </>
  )
}

export default App
