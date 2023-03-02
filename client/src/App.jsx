import { useState } from 'react'
import Navigation from './combonents/navigation'
import { BrowserRouter as Router} from 'react-router-dom'
import { Route, Routes, Navigate } from "react-router-dom"

import './assets/scss/base.scss'
import { navLinks } from './navlinks'

import PageRenderer from './combonents/page-renderer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
        <Navigation navlinks={navLinks}/>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </div>
      <Routes>
        <Route path='/' render={() => <Navigate to='home' />} />
        <Route path=":page" element={<PageRenderer />} />
        <Route path='*' element={() => 404} />
      </Routes>
    </Router>
 
  )
}

export default App
