import React from 'react'
import Avatar from '../Avatar'
import Menu from '../Menu'
import Search from '../Search'
import s from './Header.css'

const ListMenu = [
    {'id': 1, 'item': 'Teste', 'link': '#'},
    {'id': 2, 'item': 'Menu', 'link': '/get-started'},
    {'id': 3, 'item': 'Logout', 'link': '/error'}
]

const UserList = [
    {'id': 1, 'item': 'Perfil', 'link': '#'},
    {'id': 2, 'item': 'Sair', 'link': '#'}
]

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
                    <Menu key={2} List={ListMenu} className={s.navButton}>
                        <i className="material-icons">more_vert</i>
                    </Menu>
                    <Menu key={1} List={UserList} className={s.navButton}>
                        <Avatar user="Argus" 
                            src="https://lh3.googleusercontent.com/-8pMVVGd_jYw/AAAAAAAAAAI/AAAAAAAAA4w/Qn3TPGcQ25A/photo.jpg?sz=64" />
                    </Menu>
                </div>
            </header>
        )
    }
}

export default Header