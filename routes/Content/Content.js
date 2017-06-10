import React, { Component } from 'react'
import Layout from '../../components/Layout'
import Grid from '../../components/Grid'
import Card from '../../components/Card'
import s from './Content.css'
import teste from './teste.json'

const title = 'Conteudo Personalizado'

class Content extends Component{

  componentDidMount() {
    document.title = title
  }

  render(){
    return(
      <Layout>
        <div className={`${s.conteudo}`}>
          <div className="row">
            {teste.Tester.map((items) => {
              return(
                <Grid cols="12 6 4" key={items.id}>
                  <Card img={items.bg} title={items.title} data={items.Atcreated} />
                </Grid>
              )
            })}
          </div>
        </div>
      </Layout>
    )
  }
}


export default Content
