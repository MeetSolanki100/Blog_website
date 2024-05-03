import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './Blog'
import List from './List'
import Signin from './Signin'
import Navbar from './Navbar'
import ReadJSON from './ReadJSON'
import Genre from './Genre';
import Welcome from './Welcome';
import Footer from './Footer';
import Create from './Create';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
function App() {
  

  return (
    <>
      <Router>
      <Navbar/>
      
    <Routes>
          <Route path="/" element={<List/>} />
          <Route path="/Signin" element={<Signin/>} />
          <Route path='/blog/:id' element={<Blog></Blog>}></Route>
          <Route path='/create' element={<Create></Create>}></Route>
        </Routes>
    </Router>
    <Footer></Footer>
    
      
    </>
  )
}

export default App
