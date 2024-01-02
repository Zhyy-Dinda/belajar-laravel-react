// import { useState } from 'react'
import {BeakerIcon} from "@heroicons/react/24/solid"
import './App.css'
import Login from './auth/Login';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-purple-600 flex text-2xl text-center items-center content-center min-h-screen">
        
        <Login />
       </div>
    </>
  )
}

export default App
