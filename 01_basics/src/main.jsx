import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function Myapp() {
  return(
  <div>
  <h1>this is the heading</h1>
  </div>
  )
}
//another way to make 

const anotheruser='chai aur code'
// creTING A ELEMENT THROUGH REACt 
const rea=React.createElement(
  'a',
  {
    href: 'https://www.youtube.com/watch?v=kAOuj6o7Kxs',target: '_blank'
  },
  'this is my forst react element  box  ',
    anotheruser
  )
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
 rea
  
  )
