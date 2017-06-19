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
                {this.props.Nav.map((items) => {
                    return(
                        <Link key={items.key} className={linkClass(`${items.class}`)} to={items.to}>{items.title}</Link>
                    )
                })}
            </nav>
        )
    }
}

export default Navigations