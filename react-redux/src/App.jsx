import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CakeContainer from './components/CakeContainer'
import HooksCake from './components/HooksCake'
import IcecreamContainer from './components/IcecreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
import ItemContainer from './components/ItemContainer'

function App() {

  return (
      <div className='App'>
        <ItemContainer cake/>
        <ItemContainer />
         <CakeContainer />
         <HooksCake />
         <IcecreamContainer />
         <NewCakeContainer />
      </div>
  )
}

export default App
