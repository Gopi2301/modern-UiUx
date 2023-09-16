import { useState } from 'react'
import './App.css'
import { Blog, Features, Footer, Header, Possibility, Whatgpt3 } from './containers'
import { CTA, Article, Brand, Feature, Navbar } from './components'

function App() {


  return (
    <>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <Whatgpt3 />
        <Feature />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </>
  )
}

export default App
