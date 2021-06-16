import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
       <div className="ui fixed menu">
           <Link to = '/'>
             <h1 className = 'header'>Contact List </h1>
            </Link>
        </div>    
    )
}

export default Header
