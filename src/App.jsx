
import { useEffect } from 'react'
import './App.css'
import About from './components/About'
import Features from './components/Features'
import Header from './components/Header'
import Hero from './components/Hero'
import Story from './components/Story';
import AOS from 'aos';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='bg-gradient-to-r from-[#184892] via-[#2061C5] to-[#287AF8]'>
      <Header/>
      <Hero/>
      </div>
      <Features/>
      <About/>
      <Story/>

    </div>
  )
}

export default App
