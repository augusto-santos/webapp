import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import s from './Search.css'

/** actions redux imports */
import { changeDescription } from '../../actions/Search/actions'

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

function mapStateToProps(state){
	return {
		busca: state.search.busca
	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ changeDescription}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Search)
