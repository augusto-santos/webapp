import React, { Component } from 'react'
import s from './Sidebar.css'

class Sidebar extends Component{
    render(){
        const sidebarClass = this.props.isOpen ? `${s.sidebar} ${s.open}` : `${s.sidebar}`
        return(
            <aside className={sidebarClass} >
                <div className={s.header} >
                    <h4>Menu</h4>
                </div>
                <div className={s.container}>
                    <ul className={s.menus}>
                        <li className={s.item}>Teste</li>
                        <li className={s.item}>Sidebar</li>
                        <li className={s.item}>Component</li>
                    </ul>
                </div>
            </aside>
        )
    }
}

export default Sidebar