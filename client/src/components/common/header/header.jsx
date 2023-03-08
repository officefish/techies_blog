import React from 'react'
import HeaderNavbar from './header-navbar'
import Logo from './Logo'

const Header = ({user}) => {
  return (
    <div>
      <header className='header_container'>
        <div className='flex items-center justify-end'>
            <Logo />
            <div className='header_description'>
                <span>Blog</span>
                <span className='hidden md:inline-flex md:ml-1'>about programming</span> 
                <span className='hidden lg:inline-flex lg:mx-1' >with software techies and</span><a 
                className="hidden lg:inline-flex cursor-pointer huver:underline hover:text-cyan-500"
                href='https://github.com/officefish'>office fish</a>
                <span>.</span>
            </div>
        </div>
        <HeaderNavbar />
      </header>
      <div className="header_offset"></div>
    </div>
  )
}

export default Header