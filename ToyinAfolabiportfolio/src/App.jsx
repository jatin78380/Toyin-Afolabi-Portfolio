import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import {About} from './components/About'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Testimonials } from './components/Testimonaials'
import { Brands } from './components/Brands'
import Contact from './components/Contact'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-blue-700 selection:text-black-800">
    <div className="fixed top-0 -z-10 h-full w-full">
    <div class="absolute inset-0 -z-10 h-full w-full bg-white "></div>
    </div>
       <div className='container mx-auto px-8'>
       <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Brands/>
        <Testimonials/>
        <Contact/>
       
        
       </div>
       
        
      </div>
    
    </>
  )
}

export default App
