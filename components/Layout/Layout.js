/**
 * React App SDK (https://github.com/kriasoft/react-app)
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar'
import s from './Layout.css';

class Layout extends React.Component{

  constructor(props){
    super(props)
    this.state = { siderbarOpen: false }

    this.handleSidebar = this.handleSidebar.bind(this)
    this.outSidebar = this.outSidebar.bind(this)
  }

  handleSidebar(){
    console.log('work')
    this.setState({ siderbarOpen: !this.state.siderbarOpen })
  }

  outSidebar(){
    return(
      <div className={s.outSidebarContainer} onClick={this.handleSidebar} ></div>
    )
  }

  render(){
    return (
      <div className={s.root}>
        <Header toggle={this.handleSidebar} />
        <Sidebar isOpen={this.state.siderbarOpen} />
        <div className={s.container}>
          <div className={s.content}>
            <div className={`${s.content} ${this.props.className ? ` ${this.props.className}` : ''}`}>
              {this.props.children}
            </div>
          </div>
        </div>
        {this.state.siderbarOpen ? this.outSidebar() : null}
      </div>
    )
  }
}

export default Layout;
