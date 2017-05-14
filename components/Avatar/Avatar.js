import React, { Component } from 'react'
import s from './Avatar.css'

class Avatar extends Component{

    constructor(props){
        super(props)
        this.state = { openUser: false}

        this.handleUser = this.handleUser.bind(this)
    }

    handleUser(){
        console.log('User Work!')
        this.setState({ openUser: !this.state.openUser })
    }

    render(){
        return(
            <div className={s.avatar} onClick={this.handleUser} >
                <img src={this.props.src} alt={this.props.user} />
            </div>
        )
    }
}

export default Avatar