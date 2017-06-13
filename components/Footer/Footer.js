import React, { Component } from 'react'
import Link from '../Link'
import s from './Footer.css'

class Footer extends Component{
    render(){
        return(
            <div className={`${s.wrapperFooter}`}>
                <div className={`${s.wrapperContainer}`}>
                    <div className={`${s.logoFooter}`}>
                        <img src="/img/logo-footer.svg" alt="logo-site"/>
                        <p>Corpright © 2017 HyperTextMarkLanguage™ Inc.</p>
                    </div>
                    <div className={`${s.siteContent}`}>
                        <Link className={`${s.link}`} to="/">Home</Link>
                        <Link className={`${s.link}`} to="/get-started">Get Started</Link>
                        <Link className={`${s.link}`} to="/content">Content</Link>
                        <Link className={`${s.link}`} to="/post">Post's</Link>
                    </div>
                    <div className={`${s.contact}`}>
                        <p>augusto.santos5575@gmail.com</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer