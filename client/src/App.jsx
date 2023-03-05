import { useState } from 'react'
import Navigation from './components/navigation'
import { BrowserRouter as Router} from 'react-router-dom'
import { Route, Routes, Navigate } from "react-router-dom"

import './assets/scss/base.scss'
//import '@quasar/extras/ionicons-v4/'

import { navLinks } from './navlinks'
import PageRenderer from './combonents/page-renderer'

function App() {
  const [count, setCount] = useState(0)

  const user = {
    firstName: "Sergey",
    lastName: "Inozemcev"
  }

  return (
    <Router>
      <div className="App">
        <Navigation navlinks={navLinks} user={user}/>
      </div>
      <Routes>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path=":page" element={<PageRenderer />} />
        <Route path='*' element={() => 404} />
      </Routes>
    </Router>
 
  )
}

export default App
