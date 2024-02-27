import { useState } from 'react'
import './App.css'
import Header from './Header'
import Hero from './Hero'

function App() {
  const [count, setCount] = useState(0)

  return <>
    <Header/>
    <main>
      <Hero/>
    </main>
    
  </>
  
}

export default App
