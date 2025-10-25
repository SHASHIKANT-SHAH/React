import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReducerHook from './ReducerHook'
import FetchAPI from './FetchAPI'
import Axiosget from './components/axiosexamples/Axiosget'

function App() {

  return (
    <>
    <Axiosget />
    {/* <FetchAPI /> */}
    <ReducerHook />
    </>
  )
}

export default App
