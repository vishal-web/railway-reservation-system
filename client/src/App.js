import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Routes as Pages } from './routes/index'
import { useApi } from './hooks/useApi'

const App = () => {
  const { getApi } = useApi()

  useEffect(() => {
    getApi('/ping').then().catch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
