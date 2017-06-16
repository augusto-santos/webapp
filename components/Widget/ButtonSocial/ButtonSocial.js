import React, { Component } from 'react'
import s from './ButtonSocial.css'

class ButtonSocial extends Component{
    render(){
        return(
          <a href="#" className={`${s.socialButton}`} >Social</a>  
        )
    }
}

export default ButtonSocial