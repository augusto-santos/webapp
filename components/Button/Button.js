import React, { Component } from 'react'
import s from './Button.css'

class Button extends Component{

    constructor(props){
        super(props)
    }

    handleType(){
        console.log('work!')
    }

    render(){
        return(
            <button className={`${s.btn}`}>
                {this.props.children}
            </button>
        )
    }
}

export default Button