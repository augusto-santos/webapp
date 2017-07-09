import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Markdown from '../../components/Markdown'
// import io from 'socket.io-client'
import { loadPost, loadFileMd } from '../../actions/Lore/action'
import s from './Lore.css'

// const socket = io()

class Lore extends Component{

	constructor(props){
		super(props)

		this.handleAvatar = this.handleAvatar.bind(this)
	}

	componentDidMount(){
		this.props.loadPost(3)
		document.title = this.props.post.title
	}

	handleAvatar(avatar){
		return `http://0.0.0.0:5000/api/containers/avatares/download/${avatar}`
	}

	render(){
		const { user, post, content } = this.props
		return(
			<div className={`${s.container}`}>
				<header>
					<div className={`${s.header_container}`}>
						<div className={`${s.item_header}`}>
							<i className={`material-icons`}>menu</i>
						</div>
						<div className={`${s.item_header}`}>
							<i className={`material-icons`}>invert_colors</i>
						</div>
					</div>
				</header>
				<div className={`${s.wrapper}`}>
					<div className={`${s.post_info}`}>
						<div className={`${s.post_title}`}>
							<h4>{post.serie}</h4>
							<h2>{post.title}</h2>	
						</div>
						<div className={`${s.info_post}`}>
              <div className={`${s.date}`}>Postado em {post.atCreated}</div>
              <div className={`${s.info_data}`}>
	              <i className={`material-icons ${s.icon}`}>visibility</i>{post.viewrs}
	             </div>
              <div className={`${s.info_data}`}>
		            <i className={`material-icons ${s.icon}`}>forum</i>{post.commentaries}
              </div>
	          </div>
					</div>
					<Markdown Content={content} />
					<div className={`${s.footer_bar}`}>
						<div className={`${s.item_toolbar}`}>
							<i className={`material-icons ${s.icon_toobar}`}>favorite_border</i>
						</div>
						<div className={`${s.item_toolbar}`}>
							<i className={`material-icons ${s.icon_toobar}`}>notifications_none</i>
						</div>
						<div className={`${s.item_toolbar}`}>
							<i className={`material-icons ${s.icon_toobar}`}>translate</i>
						</div>
						<div className={`${s.item_toolbar}`}>
							<i className={`material-icons ${s.icon_toobar}`}>warning</i>
						</div>
						<div className={`${s.item_toolbar}`}>
							<i className={`material-icons ${s.icon_toobar}`}>share</i>
						</div>
					</div>
				</div>
				<div className={`${s.user_about}`}>
					<div className={`${s.about_container}`}>
						<div className={`${s.about_info}`}>
							<div className={`${s.about_avatar}`}>
								<img src={this.handleAvatar(user.avatar)} alt={user.username} />
							</div>
							<div className={`${s.about}`}>
								<h4>{user.username}</h4>
								<p>
									eu preferi o sinônimo cloaca a esgoto na tradução do epíteto de Mephala
									por achar que essa palavra traduz melhor o impacto que o nome deveria causar.
								</p>
							</div>
						</div>
						<div className={`${s.about_media}`}>
							<div className={`${s.media_item}`}>
								<img src="/img/facebook-logo-button.svg" alt="social_icon"/>
								<p className={`${s.title_social}`}>Facebook</p>
							</div>
						</div>
					</div>
				</div>
				<footer className={`${s.footer_wrapper}`}>
					<div className={`${s.footer_logo}`}>
						<h1>The Elder Scrolls</h1>
						<h4>Lories</h4>
					</div>
					<div className={`${s.footer_info}`}>
						<ul>
							<li><a href="#">Lories</a></li>
							<li><a href="#">Articles</a></li>
							<li><a href="#">Histories</a></li>
							<li><a href="#">Série</a></li>
							<li><a href="#">About Us</a></li>
						</ul>
						<p>All corpright reserved to The Elder Scrolls Lories© 2017</p>
					</div>
				</footer>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	user: state.lore.user,
	post: state.lore.post,
	content: state.lore.content
})

const mapDispatchToProps = (dispatch) => 
	bindActionCreators({ loadPost, loadFileMd }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Lore)

/** #262d3a */

// <div className={`${s.user_info}`}>
// 	<div className={`${s.user_avatar}`}>
// 		<img src={this.handleAvatar(user.avatar)} alt="User_Avatar" />
// 	</div>
// 	<div className={`${s.info}`}>
// 		<h4>{user.username}</h4>
// 	</div>
// </div>