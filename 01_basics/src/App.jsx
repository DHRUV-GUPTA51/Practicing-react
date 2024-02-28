import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    </>
  )
}

export default App


// fiber ke andr hm pause kr skte hai 
//reconsillation IS CALLEED AS virtual dom 
//virtula code me we keep track of every update 
//behind the scenes every uodation is being keep ttracjed and hence results in formation on healthy react 
//react use high efficient agorithm for making the specific partto be updated 
