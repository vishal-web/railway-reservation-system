import React from 'react'
import logo from './logo.svg'
import { Counter } from './features/counter/Counter'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Routes as Pages } from './routes/index'

console.log({ Pages })

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {Pages.map(({ path, element: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
