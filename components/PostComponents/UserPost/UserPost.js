import React, { Component } from 'react'
import s from './UserPost.css'

class UserPost extends Component{
    render(){
        return(
            <div className={`${s.publisher}`}>
                <div className={`${s.avatar}`} >
                    <img src={this.props.avatar} alt={this.props.alt}/>
                </div>
                <h4>{this.props.userName}</h4>
            </div>
        )
    }
}

export default UserPost