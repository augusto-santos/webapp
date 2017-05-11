import React from 'react'
import Nav from '../Navigation'
import s from './Header.css'

class Header extends React.Component{
    render(){
        return(
            <header className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.wrapperMenu}>
                        <div className={s.navButton}>
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
                    <div className={s.notification}>
                        <div className={s.navButton}>
                            <i className="material-icons">notifications</i>
                        </div>
                    </div>
                    <div className={s.avatar}>
                        <div className={s.navButton}>

                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header