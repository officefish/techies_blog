import { Link } from "react-router-dom"
import { UserOutlined, MenuOutlined } from '@ant-design/icons'
import { Avatar } from "antd"
import { useState } from "react"

const Navigation = ({navlinks, user}) => {

    const [isActiveMenu, setIsActiveMenu] = useState(true) 
    const toggleIsActiveMenu = () => setIsActiveMenu(!isActiveMenu) 
    
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

}

export default Navigation


