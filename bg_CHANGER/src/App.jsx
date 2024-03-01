import { useState } from "react"


function App() {
  const [ color,setcolor]=useState('yellow');

  return (
  <div className="w-full h-screen duration-200"
  style= {{backgroundColor: color}}
  >

    <div className="flex flex-wrap justify-center bottom-auto">
      test
    </div>
  </div>
  )
}

export default App
