import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Wysiwyg from '../../components/WYSIWYG'
import Layout from '../../components/Layout'
import Footer from '../../components/Footer'
import s from './Content.css'

import { loadAllPosts } from '../../actions/Content/actions'

const title = 'Conteudo Personalizado'

class Content extends Component{

  componentWillMount() {
    this.props.loadAllPosts()
  }

  componentDidMount() {
    document.title = title
  }

  render(){
    return(
      <Layout>
        <div className={`${s.conteudo}`}>
          <div className={`${s.wrapperContainer}`}>
            <Wysiwyg />
          </div>
        </div>
        <Footer></Footer>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    conteudo: state.content.conteudo
  }
}

const mapDispatchToProps = (dispatch) => 
  bindActionCreators({ loadAllPosts }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Content)
