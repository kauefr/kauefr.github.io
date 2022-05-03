import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import HelloVite from './HelloVite'
import Dashboard from './Dashboard'
import './index.css'
import Permalink from './routes/Permalink'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='hellovite' element={<HelloVite />} />
        <Route path='/p/:permalinkId' element={<Permalink />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
