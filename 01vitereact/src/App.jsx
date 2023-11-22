import { useState } from 'react'
import C from "./C.jsx"
function App() {
  const [count, setCount] = useState(0)
  const username  = "Yashu"
  return (
    <>
    <C/>
      <h1>
        hia {username}  //evaluated expression 
      </h1> 
    </>
  )
}

export default App
