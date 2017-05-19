import React, { Component } from 'react';

class ItemLink extends Component {

    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

  handleClick = (event) => {
    event.preventDefault();
  };

  render() {
    return(
        <a href={this.props.To} onClick={this.handleClick} className={this.props.className} >
            {this.props.children}
        </a>
    )
  }

}

export default ItemLink;
