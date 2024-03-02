import { useState } from 'react'
import React from 'react'
import Contact from './components/contact'
import Footer from './components/footer'
import Intro from './components/intro'
import Portfolio from './components/portfolio'
import Timeline from './components/timeline'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
    <Intro/>
    <Portfolio/>
    <Timeline/>
    <Contact/> 
    <Footer/>
    </div>
  )
}

export default App
