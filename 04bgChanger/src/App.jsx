import { useState } from "react"



function App() {
  const [color, setColor] = useState("olive")


 /* 
 let oliveColor = true
  const colorValue = (e) => {
    console.log(e.target.innerText)
    // setColor(e.target.innerText)
    
    if (oliveColor) {
      setColor(e.target.innerText)
      oliveColor = false
      console.log("remove olive color")
    } else{
      setColor("olive")
      oliveColor = true
      console.log("add olive color")
    }
  } 
    */

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-9 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-5 py-1 shadow-lg font-semibold text-white rounded-full"
          style={{backgroundColor: "red"}}>
            Red
          </button>
          <button 
          onClick={() => setColor("green")}
          className="outline-none px-5 py-1 shadow-lg font-semibold text-white rounded-full"
          style={{backgroundColor: "green"}}>
            Green
          </button>
          <button 
          onClick={() => setColor("blue")}
          className="outline-none px-5 py-1 shadow-lg font-semibold text-white rounded-full"
          style={{backgroundColor: "blue"}}>
            Blue
          </button>
          <button 
          onClick={() => setColor("yellow")}
          className="outline-none px-5 py-1 shadow-lg font-semibold text-white rounded-full"
          style={{backgroundColor: "Yellow"}}>
            Yellow
          </button>
          <button 
          onClick={() => setColor("orange")}
          className="outline-none px-5 py-1 shadow-lg font-semibold text-white rounded-full"
          style={{backgroundColor: "Orange"}}>
            Orange
          </button>
          
        </div>
      </div>

    </div>
  )
}

export default App
