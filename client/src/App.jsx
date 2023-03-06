import { useState } from 'react'
import Navigation from './components/navigation'
import { BrowserRouter as Router} from 'react-router-dom'
import { Route, Routes, Navigate } from "react-router-dom"

import './assets/scss/base.scss'
//import '@quasar/extras/ionicons-v4/'

import { navLinks } from './navlinks'
import PageRenderer from './components/page-renderer'
import Header from './components/common/header/header'

function Application() {
  const [count, setCount] = useState(0)

  const user = {
    firstName: "Sergey",
    lastName: "Inozemcev"
  }

  return (
    <Router>
      <div className="App">
        {/* <Navigation navlinks={navLinks} user={user}/> */}
        <Header user={user}/>
        <div className="h-20"></div>
        <div className="h-[400px]">
          <div className="lattice_container">
            <div className="lattice"></div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path=":page" element={<PageRenderer />} />
        <Route path='*' element={() => 404} />
      </Routes>
    </Router>
 
  )
}

export default Application