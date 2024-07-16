
import { useEffect } from 'react'
import './App.css'

import Header from './components/Header'

import AOS from 'aos';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'aos/dist/aos.css';
import Home from './Pages/Home';
import Footer from './Pages/Footer';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  

  return <div>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element = {<Home/>}/>
    </Routes>
    <Footer/>

    </BrowserRouter>
  </div>
}

export default App
