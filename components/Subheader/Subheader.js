import React, { Component } from 'react'
import s from './Subheader.css'

class Subheader extends Component{
    render(){
        return(
            <div className={`${s.subheader}`}>
                <p>Destaque</p>
            </div>
        )
    }
}

export default Subheader