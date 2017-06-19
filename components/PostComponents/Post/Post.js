import React, { Component } from 'react'
import s from './Post.css'

class Post extends Component{
    render(){
        return(
            <div className={`${s.wrapperPost}`}>
                <div className={`${s.title}`}>{this.props.titlePost}</div>
                <div className={`${s.info}`}>
                    <div className={`${s.date}`}>Postado em {this.props.atCreated}</div>
                    <div className={`${s.viewrs}`}><i className={`material-icons ${s.icon}`}>visibility</i>{this.props.viewrs}</div>
                    <div className={`${s.comment}`}><i className={`material-icons ${s.icon}`}>forum</i>{this.props.comments}</div>
                </div>
                <ul className={`${s.tags}`}>
                    {this.props.tag.map((tags) => {
                        return(
                            <li className={`${s.tag}`} key={tags}>{tags}</li>
                        )
                    })}
                </ul>
                <div className={`${s.contentPost}`}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Post