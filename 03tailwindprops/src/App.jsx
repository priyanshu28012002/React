import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1 className='bg-green-400 text-black p-10 rounded-xl'> Tailawind Test</h1>
      <Card srcImage="https://drive.google.com/file/d/1_8H8AIXi2vH36DT8M-2yxWviJ5ipZ3rm/view?usp=sharing" username="Priyanshu" btnText="click me" />
      <Card srcImage="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" username="hitesh" />

    </>



    // return fregement 
    // closing tag in .jsx
  )
}

export default App
