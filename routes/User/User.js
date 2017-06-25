import React, { Component } from 'react'
import Avatar from '../../components/Avatar'
import Layout from '../../components/Layout'
import s from './User.css'

class User extends Component{
	render(){
		return(
			<Layout>
				<div className={`${s.wrapperContainer}`}>
					<Avatar />	
          <div className={`${s.user_info}`}>
          	<h3>Username</h3>
		        <p>email@example.com</p>
          </div>		
        </div>
			</Layout>
		)
	}
}

export default User