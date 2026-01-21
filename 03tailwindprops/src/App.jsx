import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const myObj = {
    name: "bipul",
    age: 18
  }

  let myArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-600 p-4 rounded text-black font-bold'>Hello</h1>

      <Card name = "Bipul" btnText = "Click me"/>
      <Card name ="Sunil" />
    </>
  )
}

export default App
