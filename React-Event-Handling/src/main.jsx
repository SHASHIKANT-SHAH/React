import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ClickCounterClass from './ClickCounterClass.jsx'
import ClickCounterFunctional from './ClickCounterFunctional.jsx'
import Hooks from './Hooks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
