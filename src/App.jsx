import { useState } from 'react'
import './App.css'
import {Header, Hero, Blog, Contact, Experience, Footer, Portfolio, Services, Skills, Testimonials} from "./components"

function App() {
  const [count, setCount] = useState(0)

  return <>
    <Header/>
    <main>
      <Hero/>
      <Services/>
      <Portfolio/>
      <Experience/>
      <Blog />
      <Testimonials/>
      <Skills/>
      <Contact/>
    </main>
    <Footer/>
  </>
  
}

export default App
