import React from 'react'
import Home from './UserPages/Home'
import About from './UserPages/About'
import Gallery from './UserPages/Gallery'
import {BrowserRouter, Routes ,Route} from "react-router-dom"
import Contact from './UserPages/Contact'
import Login from './UserPages/Login'
import UploadNews from './AdminPages/UploadNews'
import DisplayContact from './AdminPages/DisplayContact'
import UploadGallery from './AdminPages/UploadGallery'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path='/'></Route>
          <Route element={<About/>} path='/About'></Route>
          <Route element={<Gallery/>} path='/Gallery'></Route>
          <Route element={<Contact/>} path='/Contact'></Route>
          <Route element={<Login/>} path='/Login'></Route>
          <Route element={<UploadNews/>} path='/UploadNews'></Route>
          <Route element={<DisplayContact/>} path='/DisplayContact'></Route>
          <Route element={<UploadGallery/>} path='/UploadGallery'></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App