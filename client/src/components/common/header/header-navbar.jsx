import React from 'react'
import { Link } from "react-router-dom"

const HeaderNavbar = () => {
  return (
    <div>
        <nav className='header_navbar'>
            <Link className='mr-2 hidden xl:flex hover:text-cyan-500 cursor-pointer' to='/about-us'>About us.</Link>
            <Link className='mr-2 hidden md:flex hover:text-cyan-500 cursor-pointer' to='/contact-us'>Contact us.</Link>
            <Link className='mr-2 hidden lg:flex hover:text-cyan-500 cursor-pointer' to='/studing'>Studing with us.</Link>
            <Link className='mr-2 hidden md:flex hover:text-cyan-500 cursor-pointer' to='/donation'>Support us.</Link>
            <Link className='mx-2 hover:text-cyan-500 cursor-pointer' to='/sign-in'>Sign In.</Link>
        </nav>
    </div>
  )
}

export default HeaderNavbar