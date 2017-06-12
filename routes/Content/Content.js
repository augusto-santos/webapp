import React, { Component } from 'react'
import Layout from '../../components/Layout'
import Footer from '../../components/Footer'
import Grid from '../../components/Grid'
import Card from '../../components/Card'
import s from './Content.css'
import Teste from '../../test/ContentTeste.json'

const title = 'Conteudo Personalizado'

class Content extends Component{

  componentDidMount() {
    document.title = title
  }

  render(){
    return(
      <Layout>
        <div className={`${s.conteudo}`}>
          <div className={`${s.wrapperContainer}`}>
            <div className="row">
              {Teste.map((items) => {
                return(
                  <Grid cols="12 6 4" key={items.key}>
                    <Card img={items.bg} title={items.title} data={items.date} />
                  </Grid>
                )
              })}
            </div>
          </div>
          </div>
          <Footer></Footer>
      </Layout>
    )
  }
}


export default Content
