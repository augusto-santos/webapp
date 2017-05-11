import React from 'react'
import { Provider } from 'react-redux';

import s from './App.css'
import Logo from '../public/dist/img/html-5.svg'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = { loading: true}
    }

    componentDidMount() {
        setTimeout(() => this.setState({loading: false}), 1600)
    }

    render(){
        const { loading } = this.state
        if(loading){
            return(
                <div className={s.container}>
                    <img src={Logo} alt="Logo Site" className={s.logo} />
                    <div className={s.loader}></div>
                </div>
            )
        }

        return(
            <Provider store={this.props.store}>{this.props.children}</Provider>
        )
    }
}

export default App