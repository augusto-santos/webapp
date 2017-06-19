import React, { Component } from 'react'
import Avatar from '../../Avatar'
import s from './UserPost.css'

class UserPost extends Component{
    render(){
        return(
            <div className={`${s.publisher}`}>
                <div className={`${s.avatar}`} >
                    <Avatar src={this.props.avatar} user={this.props.alt}/>
                </div>
                <h4>{this.props.userName}</h4>
            </div>
        )
    }
}

export default UserPost