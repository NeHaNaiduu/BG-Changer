import { useState } from 'react'
import './App.css'

function App() {

  const[color,setColor]=useState("red");
  
  const handleClick=(clr)=>{
    setColor(clr)
  }

  return (
    <div className='container' style={{backgroundColor:color}}>
      <div className='wrapper'>
        <button onClick={()=>handleClick("blue")} style={{backgroundColor:"blue"}}>Blue</button>
        <button onClick={()=>handleClick("orange")} style={{backgroundColor:"orange"}}>Orange</button>
        <button onClick={()=>handleClick("green")} style={{backgroundColor:"green"}}>Green</button>
        <button onClick={()=>handleClick("black")} style={{backgroundColor:"black", color:"white"}}>Black</button>
        <button onClick={()=>handleClick("pink")} style={{backgroundColor:"pink"}}>Pink</button>
        <button onClick={()=>handleClick("purple")} style={{backgroundColor:"purple"}}>Purple</button>
        <button onClick={()=>handleClick("lavender")} style={{backgroundColor:"lavender"}}>Lavender</button>
        <button onClick={()=>handleClick("yellow")} style={{backgroundColor:"yellow"}}>Yellow</button>
        <button onClick={()=>handleClick("white")} style={{backgroundColor:"white"}}>White</button>
      </div>
    </div>
  )
}

export default App
