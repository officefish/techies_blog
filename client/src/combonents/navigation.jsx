import { Link } from "react-router-dom"

const Navigation = ({navlinks}) => {
    return <nav className="site-navigation">
        <span>Techies blog</span>
        <ul>
           {navlinks.map((link, index) => <li key={index}>
                <Link to={link.path}>{link.title}</Link>
           </li>)}
        </ul>
    </nav>
}

export default Navigation