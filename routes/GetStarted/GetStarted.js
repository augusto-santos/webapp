import React, { Component } from 'react'
import axios from 'axios'

import api from '../../api'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadPosts } from '../../actions/getStartedActions'

/** Import Template */
import Layout from '../../components/Layout'
import Footer from '../../components/Footer'

/** Import Stayle*/
import s from './GetStarted.css'

const title = "Exp Dev"

class AboutPage extends Component {

  componentDidMount() {
    document.title = title
    console.log(this.props.content)
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={`${s.wrapperContainer}`}>
          <h1>{title}</h1>
          {this.props.content}
        </div>
        <Footer />
      </Layout>
    );
  }
}

function mapStateToProps(store){
  return{
    content: store.getStarted.content
  }
}

export default connect(mapStateToProps)(AboutPage)


/*

{this.props.content.map((items) => {
            return(
              <div key={items.id} className={`${s.wrapperPosts}`}>
                <div className={`${s.info}`}>
                  <h4>{items.title}</h4>
                  <p>{items.atCreated}</p>
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

*/