import React, { Component } from 'react'
import s from './Card.css'

class Card extends Component{
    render(){
        return(
            <div className="wrapper-Card">
                <div className="card_img" style={{ backgroundImage: `url(${this.props.img})`}} ></div>
                <div className="card_info">
                    <div className="card_info_title">Teste</div>
                    <div className="card_info_data">07/06/2017</div>
                    <div className="card_info_description"></div>
                </div>
                <div className="card_action">
                    <a href="#" className="card_action_more">Var Mais</a>
                </div>
            </div>
        )
    }
}

export default Card