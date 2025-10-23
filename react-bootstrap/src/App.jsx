import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './FirstComponent.jsx'
import SecondComponent from './SecondComponent.jsx'


function App() {

  return (
    <div>
      <SecondComponent />
    <FirstComponent />
    </div>
  )
}

export default App
