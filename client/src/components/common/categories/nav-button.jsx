import React from 'react'

const NavButton = ({path, title, currentCategory, selectCategory}) => {

    const [value, setValue] = React.useState(path)
    return (
        <button 
            className={`custom-btn btn-1`} 
            onClick={(e) => selectCategory(e)}
            value={value}
            disabled={currentCategory === value}
        >{title}.</button>
    )
}

export default NavButton