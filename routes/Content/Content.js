import React, { Component } from 'react'
import Layout from '../../components/Layout'
import s from './Content.css'

const title = 'Conteudo Personalizado'

class Content extends Component{

  componentDidMount() {
    document.title = title
  }

  render(){
    return(
      <Layout className={s.content}>
        <h3>Contéudo</h3>
      </Layout>
    )
  }
}


export default Content
