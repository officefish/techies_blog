import React from 'react'

const NavButton = ({path, title, activeCategory, setActiveCategory}) => {

    const [value, setValue] = React.useState(path)
    return (
        <button 
            className={`custom-btn btn-1`} 
            onClick={(e) => setActiveCategory(e)}
            value={value}
            disabled={activeCategory === value}
        >{title}.</button>
    )
}

export default NavButton