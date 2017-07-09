import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

import { loadUser, loadedPost, loadContent } from '../../actions/GetStarted/actions'

import Layout from '../../components/Layout'
import Footer from '../../components/Footer'
import Markdown from '../../components/Markdown'
import PostUser from  '../../components/PostComponents/UserPost'
import Post from '../../components/PostComponents/Post'
import s from './GetStarted.css'

class AboutPage extends Component {

  constructor(props){
    super(props)

    this.handleUserAvatar = this.handleUserAvatar.bind(this)
  }

  componentDidMount() {
    document.title = this.props.post.title
    this.props.loadedPost(3)
  }

  handleUserAvatar(avatar){
    return `http://0.0.0.0:5000/api/containers/avatares/download/${avatar}`
  }

  render() {
    const { user, post, conteudo } = this.props
    return (
      <Layout className={s.content}>
        <div className={`${s.wrapperContainer}`}>
          <div className={`${s.header_post}`}>
            <PostUser 
              avatar={this.handleUserAvatar(user.avatar)} 
              alt={user.username} 
              userName={user.username}
              userEmail={user.email} />
          </div>
          <Post
            key={post.id}
            titlePost={post.title}
            atCreated={post.atCreated}
            viewrs={post.viewrs}
            comments={post.commentaries}
            tag={post.tags} >
              <Markdown Content={conteudo} />
          </Post>
        </div>
        <Footer />
      </Layout>
    );
  }
}

function mapStateToProps(state){
  return{
    conteudo: state.started.content,
    user: state.started.user,
    post: state.started.post
  }
}

const mapDispatchToProps = dispatch => 
  bindActionCreators({ loadUser, loadedPost, loadContent }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage)