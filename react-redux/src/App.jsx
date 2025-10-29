import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CakeContainer from './components/CakeContainer'
import HooksCake from './components/HooksCake'
import IcecreamContainer from './components/IcecreamContainer'
import NewCakeContainer from './components/NewCakeContainer'

function App() {

  return (
      <div className='App'>
         <CakeContainer />
         <HooksCake />
         <IcecreamContainer />
         <NewCakeContainer />
      </div>
  )
}

export default App
