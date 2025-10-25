import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReducerHook from './ReducerHook'
import FetchAPI from './FetchAPI'
import GetAxios from './components/axiosexamples/GetAxios'
import PostAxios from './components/axiosexamples/PostAxios'
import { Container } from 'react-bootstrap'
import Read from './components/CRUD/Read'
import Create from './components/CRUD/Create'
import { Routes,Route } from 'react-router-dom'

function App() {

  return (
    <Container>
      <Routes>
        <Route path='/' element={<Read />}></Route>
        <Route path='/create' element={<Create />}></Route>
      </Routes>
    </Container>
    // <>
    // <PostAxios />
    // <GetAxios />
    // <FetchAPI />
    // <ReducerHook />
    // </>
  )
}

export default App
