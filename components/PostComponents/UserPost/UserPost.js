import React, { Component } from 'react'
import Avatar from '../../Avatar'
import s from './UserPost.css'

class UserPost extends Component{
    render(){
        const { avatar, alt, userName, userEmail } = this.props
        return(
            <div className={`${s.publisher}`}>
                <div className={`${s.avatar}`} >
                    <Avatar src={avatar} user={alt}/>
                </div>
                <div className={`${s.info}`}>
                    <h4>{userName}</h4>
                    <p>{userEmail}</p>
                </div>
            </div>
        )
    }
}

export default UserPost