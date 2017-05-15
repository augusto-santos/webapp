import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { styleOn, styleOff, delayItem } from './foundations'
import s from './Menu.css'

class Menu extends Component{

    constructor(props){
        super(props)
        this.state = { open: false}

        this.handleMenu = this.handleMenu.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleItemDelay = this.handleItemDelay.bind(this)
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClose, true)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClose, true)
    }

    handleMenu(){
        this.setState({
            open: !this.state.open
        })
    }

    handleOpen(){
        if(!this.state.open){
            return styleOff
        }else{
            return styleOn
        }
    }

    handleItemDelay(index){
        if(!this.state.open){
            return null
        }else{
            return delayItem(index)
        }
    }

    handleClose(event){
        const domNode = ReactDOM.findDOMNode(this)

        if((!domNode || !domNode.contains(event.target))){
            this.setState({ open: false })
        }
    }

    render(){
        return(
            <div className={s.menu} >
                <div className={this.props.classes} onClick={this.handleMenu} >
                    {this.props.children}
                </div>
                <div className={s.Open} style={this.handleOpen()} ref={this.wrapperOpen} >
                    <ul className={s.menus}>
                        <li><a href="#" className={`${s.item} ${s.itemAnim}`} 
                            style={this.handleItemDelay(1)} >Teste</a></li>
                        <li><a href="#" className={`${s.item} ${s.itemAnim}`} 
                            style={this.handleItemDelay(2)} >Menu</a></li>
                        <li>
                            <a href="#" className={`${s.item} ${s.itemAnim}`} style={this.handleItemDelay(3)} >Get Starting</a>
                        </li>
                    </ul> 
                </div>           
            </div>  
        )
    }
}

export default Menu