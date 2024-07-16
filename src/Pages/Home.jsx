import React from 'react'
// import Hero from "../components/Hero"
// import Story from './components/Story';
// import About from './components/About';
// import Service from './components/Service'
// import Customers from './components/Customers'
// import Join from './components/Join'
import Hero from '../components/Hero';
import Service from '../components/Service';
import Story from '../components/Story';
import Customers from '../components/Customers';
import Join from '../components/Join';
import About from '../components/About';

const Home = () => {
  return (
    <div className=' '>
    <div className='bg-gradient-to-r from-[#184892] via-[#2061C5] to-[#287AF8]'>
    
    <Hero/>
    </div>
    <About/>
    
    <Service/>
    <Story/>
    <Customers/>
    <Join/>

  </div>
   
  )
}

export default Home
