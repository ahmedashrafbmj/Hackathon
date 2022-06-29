import React from 'react'
import './layout.css'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <div className='headerMain'>
            <div>
                <h2>Ecommerce</h2>
            </div>
            <div>
                <ul>
                    <li><Link className='ul' to='/'>Home</Link></li>
                    <li><Link className='ul' to='/products'>Product</Link></li>
                    <li><Link to='/account' className='ul'>Account</Link></li>
                    <li><Link to='/login' className='ul'>Log In</Link></li>
                    <li><Link to='/signup' className='ul'>Sign Up</Link></li>
                </ul>
            </div>

        </div>
    )
}

export default Header

