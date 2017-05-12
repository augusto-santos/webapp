import React from 'react'
import Nav from '../Navigation'
import Dropdown from '../Dropdown'
import s from './Header.css'

class Header extends React.Component{

    constructor(props){
        super(props)

        this.dropdownList = this.dropdownList.bind(this)
    }

    dropdownList(){
        return(
            <ul className={s.menus}>
                <li><a href="#" className={s.item}>Teste</a></li>
                <li><a href="#" className={s.item}>Menu</a></li>
                <li><a href="#" className={s.item}>Dropdown</a></li>
            </ul>
        )
    }

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
                    <Dropdown classes={s.navButton} open={this.dropdownList()} >
                        <i className="material-icons">more_vert</i>
                    </Dropdown>
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