import React, { Component } from 'react'
import Navigation from './Navigations'
import s from './Sidebar.css'

class Sidebar extends Component{
    render(){
        const sidebarClass = this.props.isOpen ? `${s.sidebar} ${s.open}` : `${s.sidebar}`
        return(
            <aside className={sidebarClass} >
                <div className={s.header} >
                    <h4>Navegação</h4>
                </div>
                <div className={s.container}>
                    <Navigation Nav={this.props.navigation} />
                </div>
            </aside>
        )
    }
}

export default Sidebar