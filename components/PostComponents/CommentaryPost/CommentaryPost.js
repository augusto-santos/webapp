import React, { Component } from 'react'
import s from './CommentaryPost.css'

class CommentaryPost extends Component{
    render(){
        return(
            <div className={`${s.wrapperCommentary}`}>
                <div className={`${s.userCommentary}`}>
                    <img src={this.props.userAvatar} alt={this.props.userName}/>
                </div>
                <div className={`${s.commentaryContent}`}>
                    <div className={`${s.infoComment}`}>
                        <div className={`${s.nameUser}`}>{this.props.userName}</div>
                        <div className={`${s.dateCommented}`}>{this.props.atCreated}</div>
                    </div>
                    <div className={`${s.contentCommentary}`}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentaryPost