
import { useEffect } from 'react'
import './App.css'

import Header from './components/Header'

import AOS from 'aos';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'aos/dist/aos.css';
import Home from './Pages/Home';
import Footer from './Pages/Footer';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import Services from './Pages/Services';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  

  return <div>
    <BrowserRouter>
    {/* <Header/> */}
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='aboutpage' element= {<AboutPage/>}/>
      <Route path='contact' element={<ContactPage/>}/>
      <Route path='services' element={<Services/>}/>
    </Routes>
    <Footer/>

    </BrowserRouter>
  </div>
}

export default App
