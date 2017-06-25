import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Layout from '../../components/Layout'
import Footer from '../../components/Footer'
import s from './Content.css'

const title = 'Conteudo Personalizado'

class Content extends Component{

  componentWillMount() {
    console.log(this.props.conteudo)
  }

  componentDidMount() {
    document.title = title
  }

  render(){
    return(
      <Layout>
        <div className={`${s.conteudo}`}>
          <div className={`${s.wrapperContainer}`}>
            <h1>Teste</h1>
            {this.props.conteudo}
          </div>
        </div>
        <Footer></Footer>
      </Layout>
    )
  }
}

function mapStateToProps(state){
  return{
    conteudo: state.content
  }
}


export default connect(mapStateToProps)(Content)
