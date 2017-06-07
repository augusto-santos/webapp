import React, { Component } from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import s from './Content.css'

const title = 'Conteudo Personalizado'

class Content extends Component{

  componentDidMount() {
    document.title = title
  }

  render(){
    return(
      <Layout className={s.content}>
        <Card img="http://gameranx.com/wp-content/uploads/2016/03/Firewatch-4K-Wallpaper-1.jpg" />
      </Layout>
    )
  }
}


export default Content
