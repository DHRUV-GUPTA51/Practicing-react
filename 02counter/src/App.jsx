import { useState } from 'react'

import './App.css'

function App() {
  

  // let counter=13;
  const addvalue=()=>{
    if(counter<20){
    counter+=1;
    setcounter(counter);
    // console.log(counter);
  }
  }
  const reducevalue=()=>{
    // setcounter(counter);
    if(counter>0){
      counter-=1;
      setcounter(counter);
      
    }
    console.log(counter);
  }

  let [counter,setcounter]=useState(15);
  
  return (
    <>
    <h5>reconsilliatioin is the process which is popularly called as VIRTUAL DOM </h5>
    <h5>set counter is a hook which helps to update all the values displayed on web pages</h5>
     <h1>COUNTER PROJECT</h1>
    <br />
    <h2>Counter value {counter}</h2>
    <button onClick={addvalue}>Add Count {counter}</button>
    <br />
    <button onClick={reducevalue}>Decrement Count {counter}
    </button>
    </>
  )
}

export default App
