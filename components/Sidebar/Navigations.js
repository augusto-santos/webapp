import React, { Component } from 'react'
import history from '../../core/history'
import Link from '../Link'
import s from './Sidebar.css'

class Navigations extends Component{
    render(){
        const path = history.getCurrentLocation().pathname
        const linkClass = href => `${s.link}${path === href ? ` ${s.active} ` : ''}`
        return(
            <nav className={s.nav} >
                <Link className={linkClass('/')} to="/" >Home</Link>
                <Link className={linkClass('/get-started')} to="/get-started">Get Started</Link>
            </nav>
        )
    }
}

export default Navigations