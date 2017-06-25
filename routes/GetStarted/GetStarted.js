import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

import { loadAllPosts } from '../../actions/GetStarted/actions'

import Layout from '../../components/Layout'
import Footer from '../../components/Footer'

import s from './GetStarted.css'

const title = "Exp Dev"

class AboutPage extends Component {

  componentDidMount() {
    document.title = title
  }

  componentWillMount(){
    this.props.conteudo
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={`${s.wrapperContainer}`}>
          <h1>{title}</h1>
          {this.props.conteudo}
        </div>
        <Footer />
      </Layout>
    );
  }
}

function mapStateToProps(state){
  return{
    conteudo: state.request.conteudo
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({loadAllPosts}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage)