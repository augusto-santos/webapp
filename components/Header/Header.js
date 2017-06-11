import React from 'react'
import Avatar from '../Avatar'
import Menu from '../Menu'
import Search from '../Search'
import ListTeste from '../../test/MenuList.json'
import UserTeste from '../../test/MenuUser.json'
import s from './Header.css'

class Header extends React.Component{
    render(){
        const title = document.title
        const styleClass = this.props.isOpen ? `${s.wrapper} ${s.isOpen}` : `${s.wrapper}`
        return(
            <header className={styleClass}>
                <div className={s.container}>
                    <div className={s.wrapperMenu}>
                        <div className={s.navButton} onClick={this.props.toggle}>
                            <i className={`material-icons`}>menu</i>
                        </div>
                    </div>
                    <div className={s.title}>
                        <p>{title}</p>
                    </div>
                    <div className={s.search}>
                        <Search />
                    </div>
                    <Menu List={ListTeste} className={s.navButton}>
                        <i className="material-icons">more_vert</i>
                    </Menu>
                    <Menu List={UserTeste} className={s.navButton}>
                        <Avatar user="Argus" 
                            src="/img/user.jpg" />
                    </Menu>
                </div>
            </header>
        )
    }
}

export default Header