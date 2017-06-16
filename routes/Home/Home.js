import React, { Component } from 'react';
import axios from 'axios'
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import s from './Home.css';

const teste = 'http://0.0.0.0:5000/api/containers/container1/download/Post.md'
const title = 'React App Starter Kit';

class HomePage extends Component {

  constructor(props){
    super(props)
    this.state = {content: ''}
  }

  componentDidMount() {
    document.title = title;
    axios.get(teste)
      .then((resp => this.setState({...this.state, content: resp.data})))
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={`${s.wrapperContainer}`}>
          <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
        </div>
      </Layout>
    );
  }

}

export default HomePage;
