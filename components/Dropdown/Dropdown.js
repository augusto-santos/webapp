import React, { Component } from 'react'
import s from './Dropdown.css'

class Dropdown extends Component{

    constructor(props){
        super(props)
        this.state = { open: false}

        this.handleDropdown = this.handleDropdown.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
    }

    handleDropdown(){
        this.setState({
            open: !this.state.open
        })
    }

    handleOpen(){
        return(
            <div className={s.Open} ref={this.setWrapperRef} >
                <div className={s.Menu + ` ` + s.menudropAnim}>
                    {this.props.open}
                </div>
            </div>
        )
    }

    render(){
        return(
            <div className={s.dropdown} >
                <div className={this.props.classes} onClick={this.handleDropdown} >
                    {this.props.children}
                </div>
                {this.state.open ? this.handleOpen() : null}              
            </div>  
        )
    }
}

export default Dropdown