import { Link } from "react-router-dom"
import { UserOutlined, MenuOutlined, ArrowDownOutlined } from '@ant-design/icons'
import { Avatar } from "antd"
import { useState, useEffect, useContext } from "react"
import NavButton from "./nav-button"
import {CategoryContext} from "../../../context"


const MENU_FIXED_OFFSET = 460 //Constant for paste menu fixed position while scrolling

const Navigation = ({categories}) => {

    const [currentCategory, setCurrentCategory] = useContext(CategoryContext)

    //const [isActiveMenu, setIsActiveMenu] = useState(true) 
    //const [activeCategory, setActiveCategory] = useState('master')
    const selectCategory = (e) => {
        setCurrentCategory(e.target.value)
    }

    const [fixedMenu, setFixedMenu] = useState(window.scrollY >= MENU_FIXED_OFFSET)

    //const toggleIsActiveMenu = () => setIsActiveMenu(!isActiveMenu)
    

    useEffect(_ => {
        const handleScroll = _ => { 
            const fixed = window.scrollY >= MENU_FIXED_OFFSET
            setFixedMenu(fixed)
        }
        window.addEventListener('scroll', handleScroll)
        return _ => {
          window.removeEventListener('scroll', handleScroll)
        }
      }, [])

     
    return (
    <div className='categories_container'>
        <h1>Categories:</h1>
        <div className="line"/>
        <div className={`categories_wrapper ${fixedMenu && 'fixed'}`}>
            <ul>
                {categories.map((category, index) => <li key={index}>
                    <NavButton 
                    path={category.path} 
                    title={category.title}
                    currentCategory={currentCategory}
                    selectCategory={selectCategory}
                    />
                </li>)}
            </ul>  
        </div>
        <div className="line"/>
        <div className="scroll_wrapper">
            <span>Scroll it!</span>
            <div className="flex items-center justify-center mx-2 w-10 h-10 rounded-full bg-cyan-700">
                <ArrowDownOutlined style={{ fontSize: '16px', color: '#e0e5ec' }} />
            </div>
            <span>Scroll it!</span>
        </div>
    </div>) 

}

export default Navigation


/*
 return <nav className="site-navigation">
    <span className="nav-title">Techies blog</span>
    <div className={`nav-content-container ${isActiveMenu && 'active'}`}>
        <ul>
            {navlinks.map((link, index) => <li key={index}>
                <Link to={link.path}>{link.title}</Link>
            </li>)}
        </ul>
        <span>
            <Avatar className="nav-avatar" icon={<UserOutlined className="nav-avatar-icon" />} alt="avatar"/>
            <span className="nav-avatar-name">{user.firstName} {user.lastName}</span>
        </span>
    </div>
    <MenuOutlined className="nav-icon-menu" onClick={toggleIsActiveMenu} />
</nav>
*/

