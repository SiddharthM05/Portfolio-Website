import React from 'react'
import Intro from './components/Intro'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import PortfolioItems from './components/PortfolioItems'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Intro/>
      <Portfolio/>
      <Timeline/>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default App
