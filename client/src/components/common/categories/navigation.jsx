import { Link } from "react-router-dom"
import { UserOutlined, MenuOutlined, ArrowDownOutlined } from '@ant-design/icons'
import { Avatar } from "antd"
import { useState, useEffect, useContext, useRef } from "react"
import NavButton from "./nav-button"
import {CategoryContext} from "../../../context"


const MENU_FIXED_OFFSET = 350 + 56 + 12 //* lattice.height + h1.height + br.height


const Navigation = ({categories}) => {

    const ref = useRef(null)

    const [currentCategory, setCurrentCategory] = useContext(CategoryContext)
    const selectCategory = (e) => setCurrentCategory(e.target.value)
    
    const [fixedMenu, setFixedMenu] = useState(window.scrollY >= MENU_FIXED_OFFSET)
    //const toggleIsActiveMenu = () => setIsActiveMenu(!isActiveMenu)

    const [spacerSyle, setSpacerSyle] = useState({})

    function disableScrolling(){
        var x=window.scrollX
        var y=window.scrollY
        window.onscroll=function(){window.scrollTo(x, y)}
    }
    
    function enableScrolling(){
        window.onscroll=function(){}
    }

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

       useEffect(_ => {
            const element = ref.current
            setSpacerSyle({
                "height" : element.clientHeight + "px",
            })
       }, [fixedMenu])

      
    

    return (
    <div className='categories_container'>
        <h1 className="insetshadow ">Categories:</h1>
        <div className="line"/>
        <div ref={ref} className = {`categories_wrapper ${fixedMenu && 'fixed'}`}>
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
        <div style={spacerSyle} className={`${!fixedMenu && 'hidden'}`}></div>
        <div className="line"/>
        <div className="flex-1" />
        {/* <div className="scroll_wrapper">
            <span>Scroll it!</span>
            <div className="flex items-center justify-center mx-2 w-10 h-10 rounded-full bg-cyan-700">
                <ArrowDownOutlined style={{ fontSize: '16px', color: '#e0e5ec' }} />
            </div>
            <span>Scroll it!</span>
        </div> */}
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

