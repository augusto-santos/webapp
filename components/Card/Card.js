import React, { Component } from 'react'
import s from './Card.css'

class Card extends Component{
    render(){
        return(
            <div className={`${s.wrapper}`}>
                <div className={`${s.bg}`} style={{ backgroundImage: `url(${this.props.img})`}} ></div>
                <div className={`${s.info}`}>
                    <div className={`${s.data}`} >{this.props.data}</div>
                    <div className={`${s.title}`}>{this.props.title}</div>
                </div>
            </div>
        )
    }
}

export default Card
