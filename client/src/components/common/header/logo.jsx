import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logo = () => {

    const navigate = useNavigate()
    const handleClick = () => navigate('/')
    
    return (
        <section onClick={handleClick} className="sliced_wrapper logo_wrapper group">
            <div className="sliced_top logo_top">Techies.</div>
            <div className="sliced_bottom logo_bottom" aria-hidden="true">Techies.</div>
        </section> 
    )
}

export default Logo