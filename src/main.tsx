import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import Permalink from './Permalink/Permalink'
import SevenSeasIdle from './SevenSeasIdle/SevenSeasIdle'

//import './main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='ssi' element={<SevenSeasIdle />} />
        <Route path='/p/:permalinkId' element={<Permalink />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
