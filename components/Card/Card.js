import React, { Component } from 'react'
import s from './Card.css'

class Card extends Component{
    render(){
        return(
            <div className={`${s.wrapper}`}>
                <div className={`${s.bg}`} style={{ backgroundImage: `url(${this.props.img})`}} ></div>
                <div className={`${s.info}`}>
                    <div className={`${s.data}`} >07/06/2017</div>
                    <div className={`${s.title}`}>Teste</div>
                    <div className={`${s.description}`} ></div>
                </div>
                <div className={`${s.action}`}>
                    <a href="#" className={`${s.more}`}>Var Mais</a>
                </div>
            </div>
        )
    }
}

export default Card
