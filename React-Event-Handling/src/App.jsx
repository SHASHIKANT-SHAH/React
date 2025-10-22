import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EventsEventHandling from './EventsEventHandling'
import Binding_EventHandlers from './Binding_EventHandlers'
import PassingMethodsAsProps from './ParentComponent.jsx'

function App() {

  return (
    <>
     <EventsEventHandling />
     <Binding_EventHandlers />
     <PassingMethodsAsProps />
    </>
  )
}

export default App
