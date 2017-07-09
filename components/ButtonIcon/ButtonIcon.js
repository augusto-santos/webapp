import React, { Component } from 'react'
import s from './ButtonIcon.css'

class ButtonIcon extends Component{
	render(){
		return(
			<button className={`${s.btn_icon} {this.props.classes}`}>
				<i className={`material-icons`}>{this.props.icon}</i>
			</button>
		)
	}
}

export default ButtonIcon