import React from 'react'
import Nav from '../Navigation'
import Avatar from '../Avatar'
import Menu from '../Menu'
import s from './Header.css'

class Header extends React.Component{
    render(){
        return(
            <header className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.wrapperMenu}>
                        <div className={s.navButton} onClick={this.props.toggle}>
                            <i className="material-icons">menu</i>
                        </div>
                    </div>
                    <div className={s.navigation}>
                        <Nav />
                    </div>
                    <div className={s.search}>
                        <div className={s.navButton}>
                            <i className="material-icons">search</i>
                        </div>
                    </div>
                    <Menu classes={s.navButton}>
                        <i className="material-icons">more_vert</i>
                    </Menu>
                    <div className={s.avatar}>
                        <div className={s.navButton}>
                            <Avatar user="Argus" 
                                src="https://lh3.googleusercontent.com/-8pMVVGd_jYw/AAAAAAAAAAI/AAAAAAAAA4w/Qn3TPGcQ25A/photo.jpg?sz=64" />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header