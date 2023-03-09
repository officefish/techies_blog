import { useState } from 'react'
import Navigation from './components/common/categories/navigation'
import { BrowserRouter as Router} from 'react-router-dom'
import { Route, Routes, Navigate } from "react-router-dom"

import './assets/scss/base.scss'
//import '@quasar/extras/ionicons-v4/'

import { navLinks } from './navlinks'
import PageRenderer from './components/page-renderer'
import Header from './components/common/header/header'
import LatticeMonitor from './components/common/lattice_monitor/lattice-monitor'

import { CategoryContext } from './context'

function Application() {
  
  const [currentCategory, setCurrentCategory] = useState("master")

  const user = {
    firstName: "Sergey",
    lastName: "Inozemcev"
  }

  const categories = [
    {path: 'master', title: 'Master'}, 
    {path: 'infographics', title: 'Infographics'},
    {path: 'fundamentals', title: 'Fundamentals'},
    {path: 'development', title: 'Development'},   
    {path: 'libraries', title: 'Libraries'},
    {path: 'code-review', title: 'Code review'},
    {path: 'refactoring', title: 'Refactoring'},
    {path: 'lambdas', title: 'Lambdas'},
    {path: 'challenges', title: 'Challenges'},
    {path: 'widgets', title: 'Widgets'},
    {path: 'books', title: 'Books'},     
    {path: 'gadgets', title: 'Gadgets'},    
  ]

  return (
    <CategoryContext.Provider value={[currentCategory, setCurrentCategory] }>
      <Router>
        <div className="App min-h-screen">
          {/* <Navigation navlinks={navLinks} user={user}/> */}
          <Header user={user}/>
          <LatticeMonitor />
          <Navigation categories={categories}/>
          <Routes>
              <Route path='/' element={<Navigate to="/home" />} />
              <Route path=":page" element={<PageRenderer />} />
              <Route path='*' element={() => 404} />
          </Routes>
        </div>
       
      </Router>
    </CategoryContext.Provider>
 
  )
}

export default Application