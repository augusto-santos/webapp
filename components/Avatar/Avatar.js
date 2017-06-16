import React, { Component } from 'react'
import s from './Avatar.css'

class Avatar extends Component{
  render(){
    return(
      <div className={s.avatar} >
        <img src={this.props.src} alt={this.props.user} />
      </div>
    )
  }
}

export default Avatar