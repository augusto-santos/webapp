import React, { Component } from 'react'
import s from './Search.css'

class Search extends Component{
	render(){
		return(
				<div className={`${s.wrapper}`}>
					<div className={`${s.expanded}`}>
						<input type='text' placeholder="Procura e tecle Enter" 
							onChange={this.props.changeDescription}
							value={this.props.busca} />
						<div className={`${s.searchIcon}`}>
							<i className="material-icons">search</i>
						</div>
					</div>
				</div>
			)
	}
}

export default Search
