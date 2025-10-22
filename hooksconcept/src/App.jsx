import { createContext } from 'react'
import './App.css'
import ComponentA from './ComponentA.jsx'
import UseEffectHook from './UseEffectHook.jsx'
import UseStateHook from './UseStateHook.jsx'
import ControlledClassForm from './ControlledClassForm.jsx'
import ControlledFunctionalForm from './ControlledFunctionalForm.jsx'
import RefComponent from './RefComponent.jsx'

 export const NameContext = createContext();
function App() {
  return (
    <>
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <NameContext.Provider value={"BSS"}>
        <ComponentA />
      </NameContext.Provider> */}
      {/* <ControlledClassForm /> */}
      
      <RefComponent />
      <ControlledFunctionalForm />
    </>
  )
}

export default App
