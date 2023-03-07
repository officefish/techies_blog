import { useState } from 'react'
import Navigation from './components/common/categories/navigation'
import { BrowserRouter as Router} from 'react-router-dom'
import { Route, Routes, Navigate } from "react-router-dom"

import './assets/scss/base.scss'
//import '@quasar/extras/ionicons-v4/'

import { navLinks } from './navlinks'
import PageRenderer from './components/page-renderer'
import Header from './components/common/header/header'

function Application() {
  

  const user = {
    firstName: "Sergey",
    lastName: "Inozemcev"
  }

  const categories = [
    {path: 'feed', title: 'Feed'}, 
    {path: 'infographics', title: 'Infographics'},
    {path: 'fundamentals', title: 'Fundamentals'},
    {path: 'libraries', title: 'Libraries'},
    {path: 'code-review', title: 'Code review'},
    {path: 'refactoring', title: 'Refactoring'},
    {path: 'lambdas', title: 'Lambdas'},
    {path: 'challenges', title: 'Challenges'},
    {path: 'widgets', title: 'Widgets'},
    {path: 'books', title: 'Books'},     
    {path: 'gadgets', title: 'Gadgets'},    
    {path: 'games', title: 'Games'},   
  ]

  return (
    <Router>
      <div className="App">
        {/* <Navigation navlinks={navLinks} user={user}/> */}
        <Header user={user}/>
        <div className="h-16"></div>
        <div className="h-[400px]">
          <div className="lattice_container">
            <div className="lattice"></div>
          </div>
        </div>
      </div>
      <Navigation categories={categories}/>
      <Routes>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path=":page" element={<PageRenderer />} />
        <Route path='*' element={() => 404} />
      </Routes>
    </Router>
 
  )
}

export default Application