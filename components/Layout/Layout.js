import React, { PropTypes } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar'
import s from './Layout.css'

class Layout extends React.Component{

  constructor(props){
    super(props)
    this.state = { siderbarOpen: true }

    this.handleSidebar = this.handleSidebar.bind(this)
    this.outSidebar = this.outSidebar.bind(this)
  }

  handleSidebar(){
    this.setState({ siderbarOpen: !this.state.siderbarOpen })
  }

  outSidebar(){
    return(
      <div className={s.outSidebarContainer} onClick={this.handleSidebar} ></div>
    )
  }

  render(){
    const styleClass = this.state.siderbarOpen ? `${s.container} ${s.isOpen}` : `${s.container}`
    return (
      <div className={s.root}>
        <Header toggle={this.handleSidebar} isOpen={this.state.siderbarOpen} />
        <Sidebar isOpen={this.state.siderbarOpen} />
        <section className={styleClass} >
          <div className={`${this.props.className ? ` ${this.props.className}` : ''}`}>
            {this.props.children}
          </div>
        </section>
      </div>
    )
  }
}

export default Layout;

/* {this.state.siderbarOpen ? this.outSidebar() : null} */