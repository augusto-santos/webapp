import React, { Component } from 'react'
import s from './Button.css'

class Button extends Component{
	render(){
		return(
			<button className={`${s.btn}`}>
				{this.props.children}
				{this.props.label}
			</button>
		)
	}
}

export default Button