import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { styleOn, styleOff, itemListStyle, delayItem, handleKeymapItem } from './resources/functions'
import ItemLink from '../Link'
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

    handleKeymapItem(index){
        return(
            <p className={`${s.keymapItem}`}>{index}</p>
        )
    }

    render(){
        return(
            <div className={s.menu} >
                <div className={this.props.className} onClick={this.handleMenu} >
                    {this.props.children}
                </div>
                <div className={s.Open} style={this.handleOpen()} ref={this.wrapperOpen} >
                    <ul className={s.menus}>
                        {this.props.List.map((items) => {
                            return(
                                <li className={itemListStyle} key={items.id} style={this.handleItemDelay(items.id)}>
                                    <ItemLink to={items.link} className={`${s.item} ${s.itemAnim}`} >
                                        <p className={`${s.itemLabel}`}>{items.item}</p> 
                                        {items.keymap ? this.handleKeymapItem(items.keymap) : null}
                                    </ItemLink>
                                </li>
                            )
                        })}
                    </ul> 
                </div>           
            </div>  
        )
    }
}

export default Menu