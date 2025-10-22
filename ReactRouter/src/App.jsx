import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, useNavigate} from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Navbar from './Components/Navbar.jsx'
import PageNotFound from './Components/PageNotFound.jsx'
import Products from './Components/Products.jsx'
import Shirt from './Components/Shirt.jsx'
import Jeans from './Components/Jeans.jsx'
import User from './Components/User.jsx'
import UserDetails from './Components/UserDetails.jsx'
import Settings from './Components/Settings.jsx'
import Search from './Components/Search.jsx'

function App() {
const navigate = useNavigate();
  return (
    <>
    <Navbar />
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/products" element={<Products />}>
        <Route index element={<Shirt />} />
        <Route path="shirt" element={<Shirt />} />
        <Route path="jeans" element={<Jeans />} />
     </Route>
     <Route path="/about" element={<About />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="*" element={<PageNotFound />} />
     <Route path='/search' element={<Search />} />
     <Route path='/user' element={<User/>} />
     <Route path='/user/:id' element={<UserDetails/>} />
     <Route path='/user/settings' element={<Settings/>} />
   </Routes>
   {/* <button onClick={() => navigate('/about') }>About</button>
   <button onClick={() => navigate('/contact')}>Contact</button> */}
   <button onClick={() =>navigate(-1)}>Go Back</button>
   </>
  )
}

export default App
