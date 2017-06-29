import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

import { loadPosts } from '../../actions/GetStarted/actions'

import Layout from '../../components/Layout'
import Footer from '../../components/Footer'
import md from '../../components/Markdown/utils/markdown-parser'
import Markdown from '../../components/Markdown'
import s from './GetStarted.css'

const title = "Exp Dev"

class AboutPage extends Component {

  componentDidMount() {
    document.title = title
  }

  componentWillMount(){
    this.props.loadPosts()
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={`${s.wrapperContainer}`}>
          <h1>{title}</h1>
          <Markdown Content={this.props.conteudo} />
        </div>
        <Footer />
      </Layout>
    );
  }
}

function mapStateToProps(state){
  return{
    conteudo: state.started.content
  }
}

const mapDispatchToProps = dispatch => 
  bindActionCreators({ loadPosts }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage)