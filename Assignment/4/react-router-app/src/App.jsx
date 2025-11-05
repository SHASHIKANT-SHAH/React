import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Header from './components/Layouts/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import UserInfo from './Pages/UserInfo'
import NotFound from './Pages/NotFound'

function App() {

  return (
    <div>
      <Header />
      <div className="page-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />        
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </div>
  );
};

export default App
