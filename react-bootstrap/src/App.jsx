import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactFirstComponent from './ReactFirstComponent.jsx'
import ReactGridExample from './ReactGridExample.jsx'
import ReactImageExample from './ReactImageExample.jsx'
import ReactCardExample from './ReactCardExample.jsx'
import AppNavbar from './components/NavBar/AppNavbar.jsx'
import FooterModern from './components/Footer/FooterModern.jsx'
import ProductCatalog from './components/Pages/ProductCatalog.jsx'


function App() {

  return (
     <div className="d-flex flex-column min-vh-100">
      <AppNavbar />
      <main className="flex-grow-1 p-4">
        <h1>Welcome to Stitch Studio</h1>
        <p>Beautiful design with Glass + Gradient modes.</p>
        <ProductCatalog />
        {/* <ReactFirstComponent />
        <ReactGridExample />
        <ReactImageExample />
        <ReactCardExample /> */}
      </main>
      <FooterModern theme="light" styleMode="glass" />
    </div>
  )
}

export default App
