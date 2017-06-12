import React, { Component } from 'react'
import s from './BannerPost.css'

class BannerPost extends Component{
    render(){
        return(
            <div className={`${s.wrapperBanner}`}>
                <div className={`${s.wrapperContainer}`}>
                    <div className={`${s.contentBanner}`}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default BannerPost