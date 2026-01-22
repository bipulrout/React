import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  
  // let counter = 10;

  const addValue = () => {
    if (counter === 20) {
      return
    } else {
       // counter = counter + 1
      setCounter(previousCounter => previousCounter + 1)
      setCounter(previousCounter => previousCounter + 1)
      setCounter(previousCounter => previousCounter + 1)
      setCounter(previousCounter => previousCounter + 1)
      // console.log(counter)
      // console.log("Clicked", Math.random())
    }
   
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
     
      <h1>Hello React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Increse Value {counter}</button>
      <button onClick={removeValue}>Decrese Value {counter}</button>
      <p>counter value is : {counter}</p>
    </>
  )
}

export default App
