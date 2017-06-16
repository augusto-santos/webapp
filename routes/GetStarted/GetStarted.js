import React from 'react'
import axios from 'axios'
import Layout from '../../components/Layout'
import Footer from '../../components/Footer'
import s from './GetStarted.css'
import { title, html } from './GetStarted.md'

const URL = 'http://0.0.0.0:5000/api/'

class AboutPage extends React.Component {

  constructor(props){
    super(props)
    this.state = { content: []}

    this.refresh()
  }

  refresh(){
    axios.get(`${URL}`)
      .then(resp => this.setState({...this.state, content: resp.data.posts}))
  }

  componentDidMount() {
    document.title = title
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={`${s.wrapperContainer}`}>
          <h1>{title}</h1>
          {this.state.content.map((items) => {
            return(
              <div key={items.id} className={`${s.wrapperPosts}`}>
                <div className={`${s.info}`}>
                  <h4>{items.title}</h4>
                  <p>{items.atCreated}</p>
                </div>
                <div>
                  <p>{this.state.content.author}</p>
                </div>
                <div className={`${s.counts}`}>
                  <div className={`${s.itemsCount}`}>
                    <i className="material-icons">visibility</i>
                    <p>{items.viewrs}</p>
                  </div>
                  <div className={`${s.itemsCount}`}>
                    <i className="material-icons">forum</i>
                    <p>{items.commentaries}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <Footer />
      </Layout>
    );
  }

}

export default AboutPage
