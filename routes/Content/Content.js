import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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
    console.log(this.props.conteudo)
  }

  render(){
    return(
      <Layout>
        <div className={`${s.conteudo}`}>
          <div className={`${s.wrapperContainer}`}>
            <h1>Teste</h1>
            {this.props.conteudo.map((item)=>{
              return(
                <p key={item.id} >{item.title}</p>
              )
            })}
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
